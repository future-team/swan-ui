<template>
    <li :class="classObject">
        <slot></slot>
    </li>
</template>

<script>
    /**
     * 列表标题
     *
     * List
     * - ListHeader
     * - ListItem
     * - ListCol
     *
     * @class ListHeader
     * @module 列表组件
     * @extends Base
     * @constructor
     * @since 1.0.0
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