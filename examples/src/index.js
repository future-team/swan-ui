import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import routes from './route'
import Swan from 'swan-ui'
import 'phoenix-styles/dist/phoenix-styles.css'
console.dir(Swan)
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
