<template>

</template>

<script>
    import SwBase from './Base.vue'
    export default {
        name: 'SwBadge',
        extends: SwBase,
        props: {
            classPrefix: {
                type: String,
                default: 'star'
            },
        }
    }

</script>

<style lang="less">

</style>