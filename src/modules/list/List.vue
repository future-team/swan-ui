<template>
    <ul :class="classObject">
        <slot></slot>
    </ul>
</template>

<script>
    /**
     * 列表
     *
     * List
     * - ListHeader
     * - ListItem
     * - ListCol
     *
     * @class List
     * @module 列表组件
     * @extends Base
     * @constructor
     * @since 1.0.0
     * @demo list|list.vue
     * @show true
     */
    import SwBase from '../Base.vue'
    import Logger from '../../utils/logger.js'
    export default {
        name: 'SwList',
        extends: SwBase,
        created(){
            new Logger('List')
        },
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