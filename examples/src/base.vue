<template>
    <div class="demo">
        <div class="demo-item" v-for="item in demos">
            <h5>{{item.title}}</h5>
            <p class="demo-desc">{{item.desc}}</p>
            <mini-demo :code="item.code" :options="item.options" :visible="item.visible"></mini-demo>
        </div>
    </div>
</template>
<script>
    import MiniDemo from './mini-demo.vue'
    export default {
        name: 'Base',
        components: {MiniDemo},
        data: function(){
            return {
                demos: []
            }
        }
    }
</script>

<style lang="less">
    @import "./demo.less";
</style>


