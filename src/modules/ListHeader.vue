<template>
    <li :class="classObject">
        <slot></slot>
    </li>
</template>

<script>
    import SwBase from './Base.vue'
    export default {
        name: 'SwListHeader',
        extends: SwBase,
        props: {
            classPrefix: {
                type: String,
                default: 'list-header'
            }
        }
    }
</script>