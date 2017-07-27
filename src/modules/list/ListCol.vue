<template>
    <sw-col :class="classObject">
        <slot></slot>
    </sw-col>
</template>

<script>
    import SwBase from '../Base.vue'
    import SwCol from '../grid/Col.vue'
    export default {
        name: 'SwListCol',
        extends: SwBase,
        components: {SwCol},
        props: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'list-col'
             * */
            classPrefix: {
                type: String,
                default: 'list-col'
            },
            /**
             * 是否靠左
             * @property heading
             * @type Boolean
             * */
            heading: Boolean,
            /**
             * 是否靠右
             * @property right
             * @type Boolean
             * */
            tail: Boolean
        }
    }
</script>