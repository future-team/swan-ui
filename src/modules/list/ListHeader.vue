<template>
    <li :class="classObject">
        <slot></slot>
    </li>
</template>

<script>
    /**
     * @class ListHeader
     * @module 列表组件
     * @extends Base
     * @constructor
     * @since 0.0.1
     * @demo list|list.vue
     * @show true
     */
    import SwBase from '../Base.vue'
    export default {
        name: 'SwListHeader',
        extends: SwBase,
        props: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'list-header'
             * */
            classPrefix: {
                type: String,
                default: 'list-header'
            }
        }
    }
</script>