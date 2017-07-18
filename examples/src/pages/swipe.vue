<script>
    const demos = [
        {
            title: '',
            desc: '',
            code: `
                <sw-swipe :buttons="buttons">
                   <div class="swipe-demo">向左滑动</div>
                </sw-swipe>
            `,
            options: {
                data(){
                    return {
                        buttons: [
                            {text: '置顶',  phStyle: 'gray', onHandle:()=>{console.log('置顶')}},
                            {text: '标为已读',  phStyle: 'info', onHandle:()=>{console.log('标为已读')}},
                            {text: '删除',  phStyle: 'error', onHandle:()=>{console.log('删除')}}
                        ]
                    }
                }
            }
        },
        {
            title: '',
            desc: '',
            code: `
                <sw-swipe :buttons="buttons">
                   <div class="swipe-demo">向左滑动</div>
                </sw-swipe>
            `,
            options: {
                data(){
                    return {
                        buttons: [
                            {text: '删除',  phStyle: 'error'}
                        ]
                    }
                }
            }
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


