<template>
    <div :class="classObject">
        <slot></slot>
    </div>
</template>

<script>
    /**
     * 栅格化布局组件
     * @class Grid
     * @module 布局组件
     * @extends Base
     * @Constructor
     * @since 0.0.1
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
