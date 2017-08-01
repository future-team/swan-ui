<script>
    const demos = [
        {
            title: '基本用法',
            desc: '',
            code: '<sw-slider :progress="10"/>'
        },
        {
            title: '数值显示模式',
            desc: '属性：tipMode，默认值：default',
            code: '<sw-slider tipMode="tooltip"/>'
        },
        {
            title: '数值始终显示',
            desc: '属性：tipStay，默认值:false ,配合tipMode使用',
            code: '<sw-slider tipMode="tooltip" tipStay/>'
        },
        {
            title: '数值显示位置',
            desc: '属性：placement，默认值: top',
            code: `
                   <sw-slider tipMode="tooltip" placement="top"/>
                   <sw-slider tipMode="tooltip" placement="bottom"/>`
        },
        {
            title: '显示范围',
            desc: '属性：showRange，默认值: false',
            code: '<sw-slider tipMode="tooltip" showRange/>'
        },
        {
            title: '设置范围',
            desc: '属性：showRange，默认值：false',
            code: '<sw-slider tipMode="tooltip" :range="[23,78]" showRange/>'
        },
        {
            title: '只读模式',
            desc: '属性：range，默认值： [0,100]',
            code: '<sw-slider :progress="10" disabled/>'
        },
        {
            title: '设置每次拖动距离',
            desc: '属性：duration，默认值：1',
            code: '<sw-slider :progress="10" :duration="10"/>'
        },
        {
            title: '事件',
            desc: '事件：slide-end，回调参数：滑动数值',
            code: '<sw-slider :progress="progress" @slide-end="handleSlideEnd"/>',
            options: {
                data(){
                    return { progress: 10 }
                },
                methods:{
                    handleSlideEnd(val){
                        alert(val)
                    }
                }
            }
        }

    ]
    import Base from '../base.vue'
    export default {
        name: 'PageSlider',
        extends:Base,
        data(){
            return {
                demos: demos
            }
        }
    }
</script>