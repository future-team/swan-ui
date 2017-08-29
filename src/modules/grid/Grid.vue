<template>
    <div :class="classObject">
        <slot></slot>
    </div>
</template>

<script>
    /**
     * 栅格布局
     *
     * Grid
     * - Row
     * - Col
     *
     * @class Grid
     * @module 栅格组件
     * @extends Base
     * @Constructor
     * @since 1.0.0
     * @demo grid|grid.vue
     * @show true
     */
    import SwBase from '../Base.vue'
    export default {
        name: 'SwGrid',
        extends: SwBase,
        props: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'grid'
             * */
            classPrefix: {
                type: String,
                default: 'grid'
            }
        }
    }
</script>
