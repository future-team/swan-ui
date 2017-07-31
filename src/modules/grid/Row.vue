<script>
    /**
     * 行组件
     * @class Row
     * @module 布局组件
     * @extends Base
     * @Constructor
     * @demo grid|grid.vue
     * @since 0.0.1
     * @show true
     */
    import SwBase from '../Base.vue'
    export default {
        name: 'SwRow',
        extends: SwBase,
        render: function(createElement){
            return createElement(
                this.componentTag,
                {
                    'class': this.classObject
                },
                this.$slots.default )
        },
        props: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'row'
             * */
            classPrefix: {
                type: String,
                default: 'row'
            },
            /**
             * 竖直方向的排列是靠上、居中、靠下、拉伸至父容器最大高度还是基于text的baseline对齐
             * @property align
             * @type String
             * */
            align: {
                type: String,
                default: 'stretch',
                validator(val){
                    return ['top','bottom','center','stretch','baseline'].indexOf(val) >= 0
                }
            },
            /**
             * 根节点标签,ListItem组件有用到
             * @property componentTag
             * @type String
             * @default 'div'
             * */
            componentTag: {
                type: String,
                default: 'div'
            }
        }
    }
</script>
