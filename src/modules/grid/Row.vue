<script>
    /**
     * 栅格布局-行
     *
     * Grid
     * - Row
     * - Col
     *
     * @class Row
     * @module 栅格组件
     * @extends Base
     * @Constructor
     * @demo grid|grid.vue
     * @since 1.0.0
     * @show true
     */
    import SwBase from '../Base.vue'
    import Logger from '../../utils/logger.js'
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
        created(){
            new Logger('Row')
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
