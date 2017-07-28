<script>
    const demos = [
        {
            title: '向左滑动',
            desc: '未滑过按钮的三分之一,撤回',
            code: `
                <sw-swipe :buttons="[
                            {text: '置顶',  phStyle: 'gray', onHandle:()=>{console.log('置顶')}},
                            {text: '标为已读',  phStyle: 'info', onHandle:()=>{console.log('标为已读')}},
                            {text: '删除',  phStyle: 'error', onHandle:()=>{console.log('删除')}}
                        ]">
                   <div class="swipe-demo">快滑我，向左滑</div>
                </sw-swipe>
            `
        },
        {
            title: '向左滑动',
            desc: '',
            code: `
                <sw-swipe :buttons="[
                            {text: '删除',  phStyle: 'error'}
                        ]">
                   <div class="swipe-demo">快滑我，向左滑</div>
                </sw-swipe>
            `
        }
    ]
    import Base from '../base.vue'
    export default {
        name: 'Swipe',
        extends:Base,
        data(){
            return {
                demos: demos
            }
        }
    }

</script>

<style lang="less">
    .swipe-demo{
        height: 0.8rem;
        background: #fff;
        line-height: 0.8rem;
        .ph-button{
            margin: 0;
        }
    }
</style>


