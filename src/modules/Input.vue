<template>
    <div :class="classList">
        <input :type="type"
               :value="value"
               @change="handleChange"
               @focus="handleFocus"
               @blur="handleBlur"/>
        <label :class="labelClass">
            <!--<sw-icon></sw-icon>todo-->
            <span :class="setPhPrefix('input-placeholder-text')">{{placeholder}}</span>
        </label>
    </div>
</template>

<script>
    import SwBase from './Base.vue'
    import classnames from 'classnames'
    export default {
        name: 'SwBadge',
        extends: SwBase,
        data: function () {
            return {
                focus: false,
                value: null
            }
        },
        computed: {
            classList: function () {
                return classnames(this.classObject,this.phIcon ? this.setPhPrefix('input-heading'):'')
            },
            labelClass: function(){
                let placeholderShow = !this.focus && !this.value
                return classnames(this.setPhPrefix('input-placeholder'),
                    !placeholderShow? this.setPhPrefix('input-placeholder-hide'):'')
            },
            clearStatus: function () {
                return this.clear && this.value && this.focus
            },
//            visibleStatus:  this.visible && this.type=='password',
//            errorState: this.error && !this.focus
        },
        methods: {
            handleChange(){

            },
            handleFocus(){

            },
            handleBlur(){

            }
        },
        props: {
            classPrefix: {
                type: String,
                default: 'input'
            },
            type: {
                type: String,
                default: 'text'
            },
            clear: {
                type: Boolean,
                default: false,
                validator: function(){
                    return true
                }
            },
            visible: {
                type: Boolean,
                default: false
            },
            error: {
                type: Boolean,
                default: false
            },
            phIcon: {},
            placeholder: String

        }
    }

</script>

<style lang="less">
    @import "~~phoenix-styles/less/public.less";
    @import "~~phoenix-styles/less/modules/input.less";
</style>