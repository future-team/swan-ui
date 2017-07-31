<template>
    <div :class="[classObject,`ph-column-${column}`]">
        <slot></slot>
    </div>
</template>

<script>
    /**
     * 图片列表组件<br/>
     * - 通过column设置图片列表的列数，1-8列。
     * - 若需要懒加载，请配合Image组件使用。
     *
     * 属性：
     * - column:列表的列数，默认1列。<br>
     * ```code
     * <sw-image-list :column="2">
     *    <dl   v-for="(url,index) in urls"
     *          class="ph-image-item"
     *          :key="index">
     *       <dt>
     *            <sw-image  :src="url"
     *                       :defaultSrc="defaultSrc"
     *                       lazy></sw-image>
     *        </dt>
     *        <dd>
     *            <p class="ph-image-title">图片</p>
     *            <p class="ph-image-desp">描述</p>
     *        </dd>
     *    </dl>
     *</sw-image-list>
     * ```
     *
     * @class ImageList
     * @module 操作类组件
     * @extends Base
     * @Constructor
     * @since 0.0.1
     * @demo imagelist|image-list.vue
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
             * 图片列数
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