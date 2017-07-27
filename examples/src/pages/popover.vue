<script>
    const demos = [
        {
            title: '基本用法',
            desc: '属性：placement 气泡出现位置\ncontent：气泡内容',
            code: `
                   <div class="popover-demo">
                       <div class="popover-demo-bottom">
                            <sw-popover content="下侧气泡">
                                 <sw-button>bottom</sw-button>
                            </sw-popover>
                       </div>
                       <div class="popover-demo-top">
                            <sw-popover content="上侧气泡" placement="top">
                                <sw-button>top</sw-button>
                            </sw-popover>
                       </div>
                       <div class="popover-demo-right">
                            <sw-popover content="左侧气泡" placement="left">
                                <sw-button>left</sw-button>
                            </sw-popover>
                       </div>
                       <div class="popover-demo-left">
                            <sw-popover content="右侧气泡" placement="right">
                                <sw-button>right</sw-button>
                            </sw-popover>
                       </div>
                   </div>
                  `
        },
        {
            title: '定制气泡内容',
            desc: 'slot="content"',
            code: `
                   <sw-popover>
                     <div slot="content">
                        <ul>
                            <li class="popover-demo-content">下侧气泡</li>
                            <li class="popover-demo-content">下侧气泡</li>
                        </ul>
                     </div>
                     <sw-button>bottom</sw-button>
                   </sw-popover>
                  `
        },
        {
            title: '气泡距离',
            desc: '属性：distance，默认5',
            code: `
                   <sw-popover content="啦啦啦啦啦啦啦啦" :distance="20">
                     <sw-button>bottom</sw-button>
                   </sw-popover>
                  `
        },
        {
            title: '溢出换位',
            desc: 'top<=>bottom，left<=>right',
            code: `
                   <div class="popover-demo">
                       <div class="popover-demo-bottom">
                            <sw-popover content="下侧气泡">
                                 <sw-button>bottom</sw-button>
                            </sw-popover>
                       </div>
                       <div class="popover-demo-top">
                            <sw-popover content="上侧气泡" placement="top">
                                <sw-button>top</sw-button>
                            </sw-popover>
                       </div>
                       <div class="popover-demo-left">
                            <sw-popover content="左侧气泡，超出右边界会转到右侧" placement="left">
                                <sw-button>left</sw-button>
                            </sw-popover>
                       </div>
                       <div class="popover-demo-right">
                            <sw-popover content="右侧气泡，超出右边界会转到左侧" placement="right">
                                <sw-button>right</sw-button>
                            </sw-popover>
                       </div>
                   </div>
                  `
        }
    ]
    import Base from '../base.vue'
    export default {
        name: 'Popover',
        extends:Base,
        data(){
            return {
                demos: demos
            }
        }
    }
</script>

<style>
    @import "../demo.less";
    .popover-demo{
        position: relative;
        width: 100%;
        height: 3rem;
    }
    .popover-demo-bottom{
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }
    .popover-demo-top{
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
    }
    .popover-demo-left{
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
    }
    .popover-demo-right{
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
    }
    .popover-demo-content{
        border-bottom: 1px solid #fff;
        padding: 0.1rem 0;
        text-align: center;
    }
</style>