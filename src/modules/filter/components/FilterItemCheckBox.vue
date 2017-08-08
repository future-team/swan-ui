<template>
    <div :class="itemClassObject">
        <sw-list-col>
            <sw-checkbox :label="label" 
                      :disabled="disabled" 
                      @change="onCheckboxChange" 
                      :checked="checked && !disabled"></sw-checkbox>
        </sw-list-col>
    </div>
</template>

<script>
    import SwBase from '../../Base.vue'
    import SwListCol from '../../list/ListCol.vue'
    import SwCheckbox from '../../checkbox/Checkbox.vue'
    export default {
        name: 'SwFilterItemCheckbox',
        extends: SwBase,
        components: {
            SwListCol,
            SwCheckbox
        },
        props: {               
            itemIndex: {
                type: [Number, String]
            },
            disabled: {
                type: Boolean,
                default: false
            },
            checked: {
                type: Boolean,
                default: false
            },
            label: {
                type: String
            }
        },
        computed: {
            itemClassObject(){
                return {
                    'ph-row ph-list-item': true,
                    'active': this.active,
                    'disabled': this.disabled
                }
            }
        },
        mounted () {
        },
        methods: {
            onCheckboxChange(){
                this.$emit('itemIndex-change', this.itemIndex)
            }
        }
    }
</script>