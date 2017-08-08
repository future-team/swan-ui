<script>
    const demos = [
        {
            title: '基本用法',
            desc: `heading: 标题，
                   defaultActiveIndex 默认选中的tab`,
            code: `
                    <sw-tab-set defaultActiveIndex="1">
                        <sw-tab heading="标题1" :index="1">
                            横向内容1
                        </sw-tab>
                        <sw-tab heading="标题2" :index="2">
                            横向内容2
                        </sw-tab>
                    </sw-tab-set>`
        },
        {
            title: '横排竖排',
            desc: 'vertical(默认false) 设置选项卡竖排',
            code: `
                    <sw-tab-set vertical>
                        <sw-tab heading="标题1"  :index="1">
                            <sw-list>
                                <sw-list-item>
                                    <sw-list-col>竖向内容1</sw-list-col>
                                </sw-list-item>
                            </sw-list>
                        </sw-tab>
                        <sw-tab heading="标题2" :index="2">
                            竖向内容2
                        </sw-tab>
                        <sw-tab heading="标题3" :index="3">
                            竖向内容3
                        </sw-tab>
                    </sw-tab-set>`
        },
        {
            title: '设置标题的占比40%',
            desc: 'width(默认20) 设置vertical之后标题的占比',
            code: `
                    <sw-tab-set vertical :width="40">
                        <sw-tab heading="标题1" :index="1">
                            <sw-list>
                                <sw-list-item>
                                    <sw-list-col>竖向内容1</sw-list-col>
                                </sw-list-item>
                            </sw-list>
                        </sw-tab>
                        <sw-tab heading="标题2" :index="2">
                            <sw-list>
                                <sw-list-item>
                                    <sw-list-col>竖向内容2</sw-list-col>
                                </sw-list-item>
                            </sw-list>
                        </sw-tab>
                    </sw-tab-set>`
        },
        {
            title: '选项卡点击事件',
            desc: 'tab-change 回调参数：选中的index',
            code: `
                    <sw-tab-set @tab-change="tabsetChange">
                        <sw-tab heading="标题1" :index="1">
                            横向内容1
                        </sw-tab>
                        <sw-tab heading="标题2" :index="2">
                            横向内容2
                        </sw-tab>
                    </sw-tab-set>`,
            options: {
                methods: {
                    tabsetChange(index){
                        alert("测试tabset回调 index: " + index);
                    }
                }
            }
        },
        {
            title: '单个选项卡点击事件',
            desc: 'tab-change 回调参数：选项卡的index',
            code: `
                     <sw-tab-set>
                        <sw-tab heading="标题1" @tab-change="tabChange" :index="1">
                            横向内容1
                        </sw-tab>
                        <sw-tab heading="标题2" :index="2">
                            横向内容2
                        </sw-tab>
                    </sw-tab-set>`,
            options: {
                methods: {
                    tabChange(index){
                        alert("测试tab回调 index: " + index);
                    }
                }
            }
        }
    ]
    import Base from '../base.vue'
    export default {
        name: 'PageAccordion',
        extends:Base,
        data(){
            return {
                demos: demos
            }
        }
    }
</script>

<style>
    @import '../demo.less'
</style>
