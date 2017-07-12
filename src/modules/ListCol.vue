<template>
    <sw-col :class="classObject">
        <slot></slot>
    </sw-col>
</template>

<script>
    import SwBase from './Base.vue'
    import SwCol from './Col.vue'
    export default {
        name: 'SwListCol',
        extends: SwBase,
        components: {SwCol},
        props: {
            classPrefix: {
                type: String,
                default: 'list-col'
            },
            heading: Boolean,
            tail: Boolean
        }
    }
</script>