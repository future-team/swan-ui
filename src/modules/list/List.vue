<template>
    <ul :class="classObject">
        <slot></slot>
    </ul>
</template>

<script>
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