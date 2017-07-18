<script>
    const demos = [
        {
            title: '基本用法',
            desc: '',
            code: `
                        <sw-button>默认按钮</sw-button>
                        <sw-button hollow >空心按钮</sw-button>
                        <sw-button phStyle="link">文字按钮</sw-button>`
        },
        {
            title: '不同颜色',
            desc: '属性：phStyle， 默认值：primary',
            code: `
                        <sw-button phStyle="primary">primary</sw-button>
                        <sw-button phStyle="gray">gray</sw-button>
                        <sw-button phStyle="danger">danger</sw-button>
                        <sw-button phStyle="success">success</sw-button>
                        <sw-button phStyle="warning">warning</sw-button>
                        <sw-button phStyle="error">error</sw-button>
                        <sw-button phStyle="info">info</sw-button>`
        },
        {
            title: '空心按钮',
            desc: '属性：hollow',
            code: `
                        <sw-button hollow>hollow</sw-button>
                        <sw-button hollow phStyle="gray">hollow</sw-button>
                        <sw-button hollow phStyle="success">hollow</sw-button>
                        <sw-button hollow phStyle="warning">hollow</sw-button>`
        },
        {
            title: '不同尺寸',
            desc: '属性：phSize，  默认：sm',
            code: `
                        <div><sw-button phSize="sm">sm</sw-button></div>
                        <div><sw-button phSize="md">md</sw-button></div>
                        <div><sw-button phSize="lg">md</sw-button></div>`
        },
        {
            title: '禁用状态',
            desc: '属性：disabled',
            code: `
                        <sw-button disabled>disabled</sw-button>
                        <sw-button hollow disabled>disabled</sw-button>`
        },
        {
            title: '占行按钮',
            desc: '属性：block',
            code: `
                        <sw-button block hollow>提交</sw-button>
                        <sw-button block>提交</sw-button>`
        },
        {
            title: '图标按钮',
            desc: '属性：phIcon',
            code: `
                         <sw-button phIcon="loading-white"  phSize="lg" >整体居中</sw-button>
                         <sw-button phIcon="loading-white"  phSize="lg" stable>文字居中</sw-button>`
        },
        {
            title: '点击事件',
            desc: '',
            code: `
                        <sw-button :phIcon="phIcon" block @click="handleClick">{{phIcon?'加载中':'点我提交'}}</sw-button>
                        <sw-button :phIcon="phIcon" block @click.native="handleClick">{{phIcon?'加载中':'点我提交'}}</sw-button>`,
            options:{
                data(){
                    return {
                        phIcon: ''
                    }
                },
                methods: {
                    handleClick: function(){
                        if(!this.phIcon){
                            this.phIcon = 'loading-white'
                            setTimeout(()=>{
                                this.phIcon = ''
                            },2000)
                        }
                    }
                }
            }

        }
    ]

    import Base from '../base.vue'
    export default {
        name: 'Button',
        extends:Base,
        data(){
            return {
                demos: demos
            }
        }
    }
</script>

<style lang="less">
    .demo{
        .demo-button{
            margin: 0 .16rem .16rem 0;
        }
    }
</style>




