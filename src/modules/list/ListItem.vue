<template>
   <sw-row componentTag="li"
           :class="[classObject,navigate ? 'ph-navigate-right' : '']">
       <slot></slot>
   </sw-row>
</template>

<script>
    /**
     * List
     * - ListHeader
     * - ListItem
     * - ListCol
     *
     * @class ListItem
     * @module 列表组件
     * @extends Base
     * @constructor
     * @since 1.0.0
     * @demo list|list.vue
     * @show true
     */
    import SwBase from '../Base.vue'
    import SwRow from '../grid/Row.vue'
    export default {
        name: 'SwListItem',
        extends: SwBase,
        components: {SwRow},
        props: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'list-item'
             * */
            classPrefix: {
                type: String,
                default: 'list-item'
            },
            /**
             * 是否不可用
             * @property disabled
             * @type Boolean
             * @default false
             * */
            disabled: {
                type: Boolean,
                default: false
            },
            /**
             * 是否是输入有误
             * @property error
             * @type Boolean
             * @default false
             * */
            error: {
                type: Boolean,
                default: false
            },
            /**
             * 是否必选项
             * @property required
             * @type Boolean
             * @default false
             * */
            required: {
                type: Boolean,
                default: false
            },
            /**
             * 是否需要右箭头
             * @property navigate
             * @type Boolean
             * @default false
             * */
            navigate: {
                type: Boolean,
                default: false
            },
            /**
             * 激活状态
             * @property active
             * @type Boolean
             * @default false
             * */
            active: {
                type: Boolean,
                default: false
            }
        }
    }
</script>