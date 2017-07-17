<template>
    <div class="demo">
        <div class="demo-item" v-for="item in demos">
            <h5>{{item.title}}</h5>
            <p class="demo-desc">{{item.desc}}</p>
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
    .demo{
        padding: 0 0.5rem;
        margin-top: 1rem;
        .demo-item{
            margin-bottom: 0.5rem;
            padding: 0.2rem 0;
            border-bottom: 1px solid #bbb;
        }
        .ph-button{
            margin: 0 .16rem .16rem 0;
        }
        h5{
            margin-bottom: 0.1rem;
            font-size: 0.35rem;
        }
        .demo-desc{
            padding: 0.1rem 0;
            font-size: 0.27rem;
            color: #666;
        }
    }
</style>


