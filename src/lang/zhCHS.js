module.exports = {
  buttom: {
    cancel: '取消',
    determine: '确定',
    login: '登陆',
    signOut: '注销',
    registered: '注册',
    search: '查询',
    submit: '提交',
    save: '保存'
  },
  optionMessage: {
    admin: '管理员',
    pushButton: '接受推送',
    hints: '切换皮肤',
    skin1: '黑暗森林',
    skin2: '象牙白',
    lang: '语言',
    zh: '简体中文',
    zhCHT: '繁体中文',
    en: '英文'
  },
  message: {
    name: '姓名',
    sex: '性别',
    address: '邮箱',
    career: '职业',
    date: '日期'
  },
  routers: [
    {path: 'main', router: true, title: '首页', icon: 'home', color: 'blue'},
    {
      title: '公告',
      icon: 'record_voice_over',
      color: 'orange',
      items: [
        {path: 'announcement', router: true, title: '新建公告', icon: 'chat_bubble', color: 'blue'},
        {path: 'location', router: true, title: '列表', icon: 'clear_all', color: 'blue'}
      ]
    },
    {
      title: '数据分析',
      icon: 'backup',
      color: 'indigo',
      items: [
        {path: 'trafficAnalysis', router: true, title: '流量分析', icon: 'equalizer', color: 'indigo'},
        {path: 'flowAnalysis', router: true, title: '流动分析', icon: 'timeline', color: 'indigo'},
        {path: 'baiduMap', router: true, title: '百度地图', icon: 'satellite', color: 'indigo'},
        {path: 'mapbox', router: true, title: 'MapBox', icon: 'map', color: 'indigo'},
        {path: 'mapbox2', router: true, title: 'MapBox2', icon: 'map', color: 'indigo'},
        {path: 'arcGIS', router: true, title: 'arcGIS', icon: 'nature_people', color: 'indigo'}
      ]
    },
    {path: 'threeJS', router: true, title: '3D模型', icon: 'wifi_tethering', color: 'green'},
    {path: 'resource', router: true, title: '资源管理', icon: 'subscriptions', color: 'green'},
    {
      title: '设置',
      icon: 'settings',
      color: 'purple',
      items: [
        {path: 'setting', router: true, title: '用户管理', icon: 'folder_shared', color: 'purple'},
        {path: 'setting', router: true, title: '角色管理', icon: 'supervised_user_circle', color: 'purple'},
        {path: 'setting', router: true, title: '权限管理', icon: 'security', color: 'purple'},
        {path: 'setting', router: true, title: '设置', icon: 'settings', color: 'purple'}
      ]
    }
  ]
}
