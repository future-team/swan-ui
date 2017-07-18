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
            index: {
                type: [Number, String]
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
        data () {
            return {
                active: this.$parent.activeIndex
            }
        },
        computed: {
            classObject() {
                return {
                    'ph-col': !this.vertical,
                    'ph-tab-panel': true,
                    'active': this.index == this.$parent.activeIndex
                }
            }
        },
        mounted () {
            this.active = this.$parent.activeIndex
        },
        watch: {
            '$parent.activeIndex': function (newValue) {
                this.active = newValue
                this.$emit('clickCallback', newValue)
            }
        }
    }
</script>