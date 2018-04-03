// 数据字典

// 路由节点
export const routers = [
  {path: 'location', router: true, title: '列表', icon: 'transfer_within_a_station', color: 'blue'},
  {title: '公告', icon: 'record_voice_over', color: 'orange', items: [{title: '新建公告', path: 'announcement', router: true}, {title: '公告列表', path: 'announceList'}]},
  {title: '数据分析', icon: 'backup', color: 'indigo', items: [{path: 'trafficAnalysis', router: true, title: '流量分析', icon: 'backup', color: 'indigo'}, {path: 'flowAnalysis', router: true, title: '流动分析', icon: 'backup', color: 'indigo'}]},
  {path: 'resource', router: true, title: '资源管理', icon: 'track_changes', color: 'green'},
  {path: 'setting', router: true, title: '设置', icon: 'settings', color: 'purple'}
]
