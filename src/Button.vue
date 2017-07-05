<template>
    <button v-bind:disabled="disabled"
            v-bind:class="btnClass"
            v-on:click="handleClick">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'sw-button',
        methods: {
            handleClick: function(evt){
                this.$emit('click',evt)
            },
            genProperties(){
                let btnClass = ['ph-button']
                let props = this.$props
                for(let key in props){
                    if(props[key] && props.hasOwnProperty(key)){
                        btnClass.push(`ph-button-${props[key]}`)
                    }
                }
                return btnClass
            }
        },
        computed:{
            btnClass: function(){
                return this.genProperties()
            }
        },
        props:{
            phSize: {
                type: String,
                default: 'sm',
                validator: function(value) {
                    return [
                        'sm',
                        'md',
                        'lg'
                    ].indexOf(value) > -1
                }
            },
            phStyle: {
                type: String,
                default: 'primary',
                validator: function(value) {
                    return [
                            'primary',
                            'warning',
                            'danger',
                            'info',
                            'error',
                            'success',
                            'link',
                            'gray'
                        ].indexOf(value) > -1
                }
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

<style lang="less">
    @import "../node_modules/phoenix-styles/less/public.less";
    @import "../node_modules/phoenix-styles/less/modules/buttons.less";
</style>