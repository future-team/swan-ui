<template>
    <div :class='classObject'><slot></slot></div>
</template>

<script>
    import SwBase from '../Base.vue'
    export default {
        name: 'SwTab',
        extends: SwBase,
        props: {
            vertical: {
                type: Boolean,
                default: false
            },
            activeIndex: {
                type: [Number, String],
                default: 0
            },
            index: {
                type: [Number, String],
                default: 0
            },
            heading: {
                type: String,
                default: 'tab'
            },
            changeActive: {
                type: Function,
                default: null
            },
            onTabChange: {
                type: Function,
                default: null
            },
            className: {
                type: String,
                default: ''
            }
        },
        computed: {
            classObject() {
                return {
                    'ph-col': !this.vertical,
                    'ph-tab-panel': true,
                    'active': this.index == this.activeIndex
                }
            }
        },
        mounted () {
            let self = this
            this.$parent.$on('clickCallback', function (activeIndex) {
                self.activeIndex = activeIndex
                self.$emit('clickCallback', activeIndex)
            })
        },
        methods: {
            
        }
    }
</script>