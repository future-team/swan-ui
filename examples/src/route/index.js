import RouteConfig from './route.config.js'
import Buttons from '../pages/button.vue'

const routes = RouteConfig.map((page)=>{
    return {
        name: page.name,
        path: page.path,
        component: Buttons,
        meta: {
            title: page.name,
            description: page.desc
        }
    }
})

export default routes
