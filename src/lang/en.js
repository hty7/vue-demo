module.exports = {
  buttom: {
    cancel: 'cancel',
    determine: 'ok',
    login: 'login',
    signOut: 'signOut',
    registered: 'registered',
    search: 'search',
    submit: 'submit',
    save: 'save'
  },
  optionMessage: {
    admin: 'ADMIN',
    pushButton: 'Accept push',
    hints: 'Switch skin',
    skin1: 'Dark Forest',
    skin2: 'Ivory',
    lang: 'Lang',
    zh: 'SChinese',
    zhCHT: 'TChinese',
    en: 'English'
  },
  message: {
    name: 'name',
    sex: 'sex',
    address: 'address',
    career: 'Career',
    date: 'date'
  },
  routers: [
    {path: 'location', router: true, title: 'Lists', icon: 'transfer_within_a_station', color: 'blue'},
    {title: 'announcement', icon: 'record_voice_over', color: 'orange', items: [{title: 'Add announcement', path: 'announcement', router: true}, {title: 'Announcement list', path: 'announceList'}]},
    {title: 'Data analysis',
      icon: 'backup',
      color: 'indigo',
      items: [
        {path: 'trafficAnalysis', router: true, title: 'Traffic Analysis', icon: 'backup', color: 'indigo'},
        {path: 'flowAnalysis', router: true, title: 'Flow analysis', icon: 'backup', color: 'indigo'},
        {path: 'baiduMap', router: true, title: 'baiduMap', icon: 'backup', color: 'indigo'},
        {path: 'mapbox', router: true, title: 'MapBox', icon: 'backup', color: 'indigo'},
        {path: 'mapbox2', router: true, title: 'MapBox2', icon: 'backup', color: 'indigo'}
      ]
    },
    {path: 'resource', router: true, title: 'Resource management', icon: 'track_changes', color: 'green'},
    {path: 'setting', router: true, title: 'Settings', icon: 'settings', color: 'purple'}
  ]
}
