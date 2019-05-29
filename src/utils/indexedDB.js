/**
 *  indexedDB
 */
export default {
  indexedDB: window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB,
  store: {
    user: {
      name: 'user',
      key: 'id',
      cursorIndex: [{ name: 'userName', unique: false }, { name: 'userPhone', unique: false }]
    }
  },
  async initDB (databaseName, version) {
    let that = this
    if (indexedDB) {
      let request = this.indexedDB.open(databaseName, version)
      request.onerror = e => {
        console.log('数据库打开报错')
      }
      request.onsuccess = e => {
        console.log('数据库打开成功')
      }
      request.onupgradeneeded = e => {
        let db = e.target.result
        for (let t in that.store) {
          if (!db.objectStoreNames.contains(that.store[t].name)) {
            let objectStore = db.createObjectStore(that.store[t].name, {
              keyPath: that.store[t].key,
              autoIncrement: true
            })
            for (let i = 0; i < that.store[t].cursorIndex.length; i++) {
              const element = that.store[t].cursorIndex[i]
              objectStore.createIndex(element.name, element.name, {
                unique: element.unique
              })
            }
          }
        }
      }
    } else {
      console.log('浏览器不支持indexedDB')
      return false
    }
  },
  openDB (databaseName = 'mydb', version = '1.0') {
    return new Promise((resolve, reject) => {
      let request = this.indexedDB.open(databaseName, version)
      request.onerror = e => {
        reject(e)
      }
      request.onsuccess = e => {
        resolve(e.target.result)
      }
      request.onupgradeneeded = e => {
        resolve(e.target.result)
      }
    })
  },
  deleteDB: (tableName) => {},
  // async createdTable (tableName, keyPath, cursorIndex) {
  //   let db = await this.openDB()
  //   if (!db.objectStoreNames.contains(tableName)) {
  //     let objectStore = db.createObjectStore(tableName, {
  //       keyPath: keyPath,
  //       autoIncrement: true
  //     })
  //     for (let i = 0; i < cursorIndex.length; i++) {
  //       const element = cursorIndex.cursorIndex[i]
  //       objectStore.createIndex(element.name, element.name, {
  //         unique: element.unique
  //       })
  //     }
  //     return new Promise((resolve, reject) => {
  //       objectStore.onerror = e => {
  //         reject(e)
  //       }
  //       objectStore.onsuccess = e => {
  //         resolve(true)
  //       }
  //     })
  //   }
  // },
  async insertDB (tableName, data) {
    try {
      let db = await this.openDB()
      let request = db.transaction(tableName, 'readwrite')
        .objectStore(tableName)
        .add(data)
      return new Promise((resolve, reject) => {
        request.onerror = e => {
          reject(e)
        }
        request.onsuccess = e => {
          resolve(true)
        }
      })
    } catch (err) {
      console.log(err)
      return Promise.resolve(false)
    }
  },
  async getdata (tableName, keyValue, indexCursor) {
    try {
      let db = await this.openDB()
      let request = db.transaction(tableName, 'readonly').objectStore(tableName)
      let res = !keyValue ? request.openCursor() : (indexCursor ? request.index(indexCursor).get(keyValue) : request.get(keyValue))
      let data = []
      return new Promise(resolve => {
        res.onerror = err => {
          resolve(err)
        }
        res.onsuccess = e => {
          if (!keyValue && !indexCursor) {
            if (e.target.result) {
              data.push(e.target.result.value)
              e.target.result.continue()
            } else {
              resolve(data)
            }
          } else {
            resolve([e.target.result])
          }
        }
      })
    } catch (err) {
      return Promise.reject(err)
    }
  },
  // 创建游标索引
  async createCursorIndex (tableName, cursorIndex, unique) {
    let db = await this.openDB()
    let request = db.transaction(tableName, 'readwrite').objectStore(tableName)
    request.createIndex(cursorIndex, cursorIndex, { unique: unique })
    return Promise.resolve()
  }
}
