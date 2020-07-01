import { Constant } from './_utils'
const { ApiPrefix } = Constant

const database = [
  {
    id: '1',
    icon: 'dashboard',
    name: 'Dashboard',
    zh: {
      name: '仪表盘'
    },
    'pt-br': {
      name: 'Dashboard'
    },
    route: '/dashboard',
  },
  {
    id: '2',
    breadcrumbParentId: '1',
    name: 'User',
    zh: {
      name: '用户管理'
    },
    'pt-br': {
      name: 'Usuário'
    },
    icon: 'user',
    route: '/user',
  },
  // {
  //   id: '7',
  //   breadcrumbParentId: '1',
  //   name: 'Posts',
  //   zh: {
  //     name: '用户管理'
  //   },
  //   'pt-br': {
  //     name: 'Posts'
  //   },
  //   icon: 'shopping-cart',
  //   route: '/post',
  // },
  {
    id: '21',
    menuParentId: '-1',
    breadcrumbParentId: '2',
    name: 'User Detail',
    zh: {
      name: '用户详情'
    },
    'pt-br': {
      name: 'Detalhes do usuário'
    },
    route: '/user/:id',
  },
  {
    id: '3',
    breadcrumbParentId: '1',
    name: 'Request',
    zh: {
      name: 'Request'
    },
    'pt-br': {
      name: 'Requisição'
    },
    icon: 'api',
    route: '/request',
  },
  {
    id: '4',
    breadcrumbParentId: '1',
    name: 'UI Element',
    zh: {
      name: 'UI组件'
    },
    'pt-br': {
      name: 'Elementos UI'
    },
    icon: 'camera-o',
  },
  {
    id: '45',
    breadcrumbParentId: '4',
    menuParentId: '4',
    name: 'Editor',
    zh: {
      name: 'Editor'
    },
    'pt-br': {
      name: 'Editor'
    },
    icon: 'edit',
    route: '/editor',
  },
  {
    id: '5',
    breadcrumbParentId: '1',
    name: 'Courses',
    zh: {
      name: 'Courses'
    },
    'pt-br': {
      name: 'Graficos'
    },
    icon: 'code-o',
  },
  {
    id: '51',
    breadcrumbParentId: '5',
    menuParentId: '5',
    name: 'MA101',
    zh: {
      name: 'MA101'
    },
    'pt-br': {
      name: 'MA101'
    },
    // icon: 'line-chart',
    route: '/course/MA101',
  },
  {
    id: '52',
    breadcrumbParentId: '5',
    menuParentId: '5',
    name: 'EE101',
    zh: {
      name: 'EE101'
    },
    'pt-br': {
      name: 'EE101'
    },
    // icon: 'bar-chart',
    route: '/course/EE101',
  },
  {
    id: '53',
    breadcrumbParentId: '5',
    menuParentId: '5',
    name: 'CS101',
    zh: {
      name: 'CS101'
    },
    'pt-br': {
      name: 'CS101'
    },
    // icon: 'area-chart',
    route: '/course/CS101',
  },

  {
    id: '54',
    breadcrumbParentId: '5',
    menuParentId: '5',
    name: 'CH101',
    zh: {
      name: 'CH101'
    },
    'pt-br': {
      name: 'CH101'
    },
    // icon: 'area-chart',
    route: '/course/CH101',
  },

  
  {
    id: '54',
    breadcrumbParentId: '5',
    menuParentId: '5',
    name: 'C101',
    zh: {
      name: 'C101'
    },
    'pt-br': {
      name: 'C101'
    },
    // icon: 'area-chart',
    route: '/course/C101',
  },

  
  {
    id: '54',
    breadcrumbParentId: '5',
    menuParentId: '5',
    name: 'H101',
    zh: {
      name: 'H101'
    },
    'pt-br': {
      name: 'H101'
    },
    // icon: 'area-chart',
    route: '/course/H101',
  },

  
  {
    id: '54',
    breadcrumbParentId: '5',
    menuParentId: '5',
    name: 'CH11',
    zh: {
      name: 'CH11'
    },
    'pt-br': {
      name: 'CH11'
    },
    // icon: 'area-chart',
    route: '/course/CH11',
  },

  
  {
    id: '54',
    breadcrumbParentId: '5',
    menuParentId: '5',
    name: 'CH1',
    zh: {
      name: 'CH1'
    },
    'pt-br': {
      name: 'CH1'
    },
    // icon: 'area-chart',
    route: '/course/CH1',
  },

  
  {
    id: '54',
    breadcrumbParentId: '5',
    menuParentId: '5',
    name: 'LA101',
    zh: {
      name: 'LA101'
    },
    'pt-br': {
      name: 'LA101'
    },
    // icon: 'area-chart',
    route: '/course/LA101',
  },

  
  {
    id: '54',
    breadcrumbParentId: '5',
    menuParentId: '5',
    name: 'FE101',
    zh: {
      name: 'FE101'
    },
    'pt-br': {
      name: 'FE101'
    },
    // icon: 'area-chart',
    route: '/course/FE101',
  },

  {
    id: '53',
    breadcrumbParentId: '5',
    menuParentId: '5',
    name: 'CS110',
    zh: {
      name: 'CS110'
    },
    'pt-br': {
      name: 'CS110'
    },
    // icon: 'area-chart',
    route: '/course/CS110',
  },
]

module.exports = {
  [`GET ${ApiPrefix}/routes`](req, res) {
    res.status(200).json(database)
  },
}
