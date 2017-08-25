<template>
    <div :class="[classObject,`ph-column-${column}`]">
        <slot></slot>
    </div>
</template>

<script>
    /**
     * 图片列表组件<br/>
     * - 若需要懒加载，请配合Image组件使用。
     *
     *
     * @class ImageList
     * @module 图片
     * @extends Base
     * @Constructor
     * @since 1.0.0
     * @demo image-list|image-list.vue
     * @show true
     * */
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
             * 设置图片列表的列数，1-8列
             * @property column
             * @type Number
             * @default 1
             * */
            column: {
                type: Number,
                default: 1
            }
        }
    }
</script>