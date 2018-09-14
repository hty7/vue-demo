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
    {path: 'main', router: true, title: 'home', icon: 'home', color: 'blue'},
    {
      title: 'announcement',
      icon: 'record_voice_over',
      color: 'orange',
      items: [
        {path: 'announcement', router: true, title: 'Add announcement', icon: 'chat_bubble', color: 'blue'},
        {path: 'location', router: true, title: 'list', icon: 'clear_all', color: 'blue'}
      ]
    },
    {title: 'Data analysis',
      icon: 'backup',
      color: 'indigo',
      items: [
        {path: 'trafficAnalysis', router: true, title: 'Traffic Analysis', icon: 'equalizer', color: 'indigo'},
        {path: 'flowAnalysis', router: true, title: 'Flow analysis', icon: 'timeline', color: 'indigo'},
        {path: 'baiduMap', router: true, title: 'baiduMap', icon: 'satellite', color: 'indigo'},
        {path: 'mapbox', router: true, title: 'MapBox', icon: 'map', color: 'indigo'},
        {path: 'mapbox2', router: true, title: 'MapBox2', icon: 'map', color: 'indigo'},
        {path: 'arcGIS', router: true, title: 'arcGIS', icon: 'nature_people', color: 'indigo'}
      ]
    },
    {path: 'threeJS', router: true, title: 'threeJS webGL', icon: 'wifi_tethering', color: 'green'},
    {path: 'resource', router: true, title: 'Resource management', icon: 'subscriptions', color: 'green'},
    {path: 'setting', router: true, title: 'Settings', icon: 'settings', color: 'purple'}
  ]
}
