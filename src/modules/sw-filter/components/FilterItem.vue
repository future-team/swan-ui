<template>
    <div :class="itemClassObject" @click="onItemClick">
        <list-col>
            {{label}}
        </list-col>
    </div>
</template>

<script>
    import SwBase from '../../Base.vue'
    import ListCol from '../../list/ListCol.vue'
    export default {
        name: 'SwFilterItem',
        extends: SwBase,
        components: {
            ListCol
        },
        props: {    
            itemKey: {
                type: [Number, String]
            },
            label: {
                type: String,
                default: ''
            },
            active: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
            }
        },
        computed: {
            itemClassObject(){
                return {
                    'ph-row ph-list-item': true,
                    'active': this.active
                }
            }
        },
        mounted () {
        },
        methods: {
            onItemClick(){
                this.$emit('itemKey-change', this.itemKey, this.label)
            }
        }
    }
</script>