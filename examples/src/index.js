import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import routes from './route'
import Swan from 'swan-ui'
import 'phoenix-styles/dist/phoenix-styles.css'
import CodeShow from './mini-demo.vue'

Vue.use(Swan)
Vue.component(CodeShow.name,CodeShow)

Vue.use(Router)
const router = new Router({
    base: __dirname,
    routes
})

new Vue({
    el: '#app',
    render: h => h(App),
    router
})


//导航钩子,每次导航滚动至顶部,但会首页停留在原位置
let bodyScrollTop = 0
router.beforeEach((to, from, next) => {
    to.path !== '/' && (bodyScrollTop = document.body.scrollTop)
    next()
})

router.afterEach(route => {
    Vue.nextTick(()=>{
        document.body.scrollTop = route.path === '/' ? bodyScrollTop : 0
    })
})
