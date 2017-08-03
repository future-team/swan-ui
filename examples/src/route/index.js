import routeConfig from './route.config.js'

const genRoutes = (routeConfig)=>{
    let routes = []
    routeConfig.forEach((categoryConfig)=>{
        categoryConfig.list.forEach((pageConfig)=>{
            let component = require(`../pages${pageConfig.path}`)
            routes.push({
                name: pageConfig.name,
                path: pageConfig.path,
                component: component.default,
                meta: {
                    title: pageConfig.name,
                    description: pageConfig.desc,
                    hiddenHeader: pageConfig.hiddenHeader || false
                }
            })
        })
    })
    return routes
}

let routes = genRoutes(routeConfig)

routes.push({
    path: '/',
    component: require(`../pages/nav.vue`).default,
    meta: {
        title: '组件列表',
        description: ''
    }
})

export default routes
