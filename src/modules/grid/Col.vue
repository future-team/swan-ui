<template>
    <div :class="classObject">
        <slot></slot>
    </div>
</template>

<script>
    /**
     * 列组件
     * @class Col
     * @module 布局组件
     * @extends Base
     * @Constructor
     * @demo grid|grid.vue
     * @since 0.0.1
     * @show true
     */
    import SwBase from '../Base.vue'
    export default {
        name: 'SwCol',
        extends: SwBase,
        props: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'col'
             * */
            classPrefix: {
                type: String,
                default: 'col'
            },
            /**
             * 占100份的多少份，目前支持5-100之间5的倍数、33（1\3）和66(2\3)
             * @property width
             * @type Number
             * */
            width: Number,
            /**
             * 偏移量
             * @property offset
             * @type Number
             * */
            offset: Number,
            /**
             * 竖直方向的排列是靠上、居中还是靠下 ['top', 'bottom','center']
             * @property align
             * @type String
             * */
            align: {
                type: String
            }
        }
    }
</script>
