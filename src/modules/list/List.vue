<template>
    <ul :class="classObject">
        <slot></slot>
    </ul>
</template>

<script>
    /**
     * List
     * @class List
     * @module 列表组件
     * @extends Base
     * @constructor
     * @since 0.0.1
     * @demo list|list.vue
     * @show true
     */
    import SwBase from '../Base.vue'
    export default {
        name: 'SwList',
        extends: SwBase,
        props: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'list'
             * */
            classPrefix: {
                type: String,
                default: 'list'
            }
        }
    }
</script>