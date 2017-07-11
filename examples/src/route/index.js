import RouteConfig from './route.config.js'
const routes = RouteConfig.map((page)=>{
    let component = require(`../pages${page.path}`)
    return {
        name: page.name,
        path: page.path,
        component: component.default,
        meta: {
            title: page.name,
            description: page.desc
        }
    }
})

export default routes
