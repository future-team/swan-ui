<template>
   <sw-row componentTag="li"
           :class="[classObject,navigate ? 'ph-navigate-right' : '']">
       <slot></slot>
   </sw-row>
</template>

<script>
    import SwBase from '../Base.vue'
    import Row from '../grid/Row.vue'
    export default {
        name: 'SwListItem',
        extends: SwBase,
        components: {Row},
        props: {
            classPrefix: {
                type: String,
                default: 'list-item'
            },
            disabled: {
                type: Boolean,
                default: false
            },
            error: {
                type: Boolean,
                default: false
            },
            required: {
                type: Boolean,
                default: false
            },
            navigate: {
                type: Boolean,
                default: false
            }
        }
    }
</script>