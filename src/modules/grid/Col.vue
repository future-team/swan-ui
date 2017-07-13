<template>
    <div :class="classObject">
        <slot></slot>
    </div>
</template>

<script>
    import SwBase from '../Base.vue'
    export default {
        name: 'SwCol',
        extends: SwBase,
        props: {
            classPrefix: {
                type: String,
                default: 'col'
            },
            width: Number,
            offset: Number,
            align: {
                type: String
            }
        }
    }
</script>
