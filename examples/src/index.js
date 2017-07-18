import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import routes from './route'
import Swan from 'swan-ui'
import 'phoenix-styles/dist/phoenix-styles.css'
import CodeShow from './mini-demo.vue'

Vue.component(CodeShow.name,CodeShow)
Vue.use(Swan)
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
