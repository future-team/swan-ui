<template>
    <div>
        <div class="header" v-if="!$route.meta.hiddenHeader">
            <router-link class="page-back" v-if="visible" :to="'/'">
                <sw-icon class="back-icon" phIcon="chevron-left" phSize="md"></sw-icon>
            </router-link>
            <h2>
                <a v-if="$route.path !== '/'" :href="`./doc${$route.path}.md`">{{title}}</a>
                <span v-else>{{title}}</span>
            </h2>
        </div>
        <router-view></router-view>
    </div>
</template>

<script >
 export default {
     computed: {
         title(){
             return this.$route.meta.title
         },
         visible(){
             return ['/'].indexOf(this.$route.path) < 0
         }
     },
     updated(){
         self.Prism.highlightAll(event)
     }
 }
</script>

<style scoped>
    .header{
        position: fixed;
        height: 1rem;
        line-height: 1rem;
        padding:0 .6rem;
        top: 0;
        width: 100%;
        z-index: 100;
        background-color: #fbfbfb;
    }
    .back-icon{
        position: absolute;
        top:0;
        left: .2rem;
    }
    h2{
        display: inline-block;
        text-align: center;
        width: 100%;
        font-size: 0.4rem;
    }
</style>