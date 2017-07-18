<template>
    <div :class="classObject">
        <slot></slot>
    </div>
</template>

<script>
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
