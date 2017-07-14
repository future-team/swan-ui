<template>
    <button :class="classObject"
            @click="handleClick">
        <sw-icon v-if="phIcon" :phIcon="phIcon" :phSize="phIcon.indexOf('loading')!=-1?'sm':''"></sw-icon>
        <slot></slot>
    </button>
</template>

<script>
    import SwBase from '../Base.vue'
    import SwIcon from '../icon/Icon.vue'
    export default {
        name: 'SwButton',
        extends: SwBase,
        components: {SwIcon},
        methods: {
            handleClick(evt){
                this.$emit('click',evt)
            }
        },
        props:{
            classPrefix: {
                type: String,
                default: 'button'
            },
            phSize: {
                type: String,
                default: 'sm'
            },
            phStyle: {
                type: String,
                default: 'primary'
            },
            block: Boolean,
            radius: Boolean,
            hollow: Boolean,
            disabled: Boolean,
            active: Boolean,
            phIcon: String,
            stable: Boolean
        }
    }
</script>
