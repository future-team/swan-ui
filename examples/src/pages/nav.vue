<template>
    <div>
        <sw-list v-for="cateRoute in routes" v-bind:key="cateRoute.title">
            <sw-list-header>{{cateRoute.title}}</sw-list-header>
                <sw-list-item navigate v-for="route in cateRoute.list" v-bind:key="route.name">
                    <router-link :to="route.path" >
                    <sw-list-col >
                        <label>{{route.name}}</label>
                    </sw-list-col>
                    </router-link>
                </sw-list-item>

        </sw-list>
    </div>
</template>

<script>
    import routes from '../route/route.config.js'
    export default {
        name: 'Index',
        computed: {
            routes(){
                return routes
            }
        }
    }
</script>

<style scoped>
    a{
        width: 100%;
    }
</style>