<template>
    <div :class='classObject'><slot></slot></div>
</template>

<script>
    /**
     * @class Tab
     * @module 选项卡
     * @extends Base
     * @Constructor
     * @since 0.0.1
     * @demo tab|tab.vue
     * @show true
     */
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
                    'ph-col': !this.$parent.vertical,
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
                this.$emit('tab-change', newValue)
            }
        }
    }
</script>