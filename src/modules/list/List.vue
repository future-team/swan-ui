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
            classPrefix: {
                type: String,
                default: 'list'
            }
        }
    }
</script>