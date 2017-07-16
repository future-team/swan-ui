<template>
    <div class="doc">
        <div class="doc-item" v-for="item in demos">
            <h5>{{item.title}}</h5>
            <mini-demo :code="item.code" :options="item.options"></mini-demo>
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
    .doc{
        .ph-button{
            margin: 0 .16rem .16rem 0;
        }
    }
</style>


