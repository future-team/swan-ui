<template>
   <sw-row componentTag="li"
           :class="[classObject,navigate ? 'ph-navigate-right' : '']">
       <slot></slot>
   </sw-row>
</template>

<script>
    import SwBase from '../Base.vue'
    import Row from '../grid/Row.vue'
    export default {
        name: 'SwListItem',
        extends: SwBase,
        components: {Row},
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
            }
        }
    }
</script>