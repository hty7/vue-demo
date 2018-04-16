module.exports = {
  buttom: {
    cancel: '取消',
    determine: '确定',
    login: '登陆',
    signOut: '退出登陆',
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
    {path: 'location', router: true, title: '列表', icon: 'transfer_within_a_station', color: 'blue'},
    {title: '公告', icon: 'record_voice_over', color: 'orange', items: [{title: '新建公告', path: 'announcement', router: true}, {title: '公告列表', path: 'announceList'}]},
    {
      title: '数据分析',
      icon: 'backup',
      color: 'indigo',
      items: [
        {path: 'trafficAnalysis', router: true, title: '流量分析', icon: 'backup', color: 'indigo'},
        {path: 'flowAnalysis', router: true, title: '流动分析', icon: 'backup', color: 'indigo'},
        {path: 'baiduMap', router: true, title: '百度地图', icon: 'backup', color: 'indigo'},
        {path: 'mapbox', router: true, title: 'MapBox', icon: 'backup', color: 'indigo'}
      ]
    },
    {path: 'resource', router: true, title: '资源管理', icon: 'track_changes', color: 'green'},
    {path: 'setting', router: true, title: '设置', icon: 'settings', color: 'purple'}
  ]
}
