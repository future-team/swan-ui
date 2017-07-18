<template>
    <div :class="[classObject,`ph-column-${column}`]">
        <slot></slot>
    </div>
</template>

<script>
    import SwBase from '../Base.vue'
    export default {
        name: 'SwImageList',
        extends: SwBase,
        props: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'image-list'
             * */
            classPrefix: {
                type: String,
                default: 'image-list'
            },
            /**
             * 图片列数，默认1列
             * @property column
             * @type Number
             * @default 1
             * */
            column: {
                type: Number,
                default: 1
            },
            /**
             * 是否懒加载
             * @property lazy
             * @type Boolean
             * @default false
             * */
            lazy: {
                type: Boolean,
                default: false
            }
        }
    }
</script>