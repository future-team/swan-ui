<template>
    <div :class="itemGroupClassObject" @click="onItemGroupClick">
        <a href='javascript:;'>{{label}}</a>
    </div>
</template>

<script>
    import SwBase from '../../Base.vue'
    export default {
        name: 'SwFilterItemGroup',
        extends: SwBase,
        components: {
        },
        props: {               
            itemGroupIndex: {
                type: [String, Number]
            },
            label: {
                type: String,
                default: ''
            },
            active: {
                type: Boolean,
                default: ''
            },
        },
        data () {
            return {
            }
        },
        computed: {
            itemGroupClassObject(){
                return {
                    'item ph-tab-nav': true,
                    'active': this.active
                }
            }
        },
        mounted () {
        },
        methods: {
            onItemGroupClick(){
                this.$emit('activeItemGroupIndex-change', this.itemGroupIndex)
            }
        }
    }
</script>