<template>
    <sw-dialog  class='ph-dialog-alert'
                v-model="currentVisible"
                :closeButton="closeButton"
                :shadowDisabled="shadowDisabled"
                @on-close="handleClose">
        <template slot='title'>{{title}}</template>
        {{content}}
        <sw-button-group slot="footer" :phType=" buttonsType ? 'tacked': 'default'">
            <sw-button v-for="(button,index) in currentButtons"
                       :key="index"
                       hollow
                       phSize="lg"
                       :phStyle="button.phStyle || 'primary'"
                       v-bind="button.otherProps"
                       :block="buttonsType"
                       @click="handleClick(button.onHandle)">
                {{button.text || '确定'}}
            </sw-button>
        </sw-button-group>
    </sw-dialog>
</template>

<script>
    import SwDialog from './Dialog.vue'
    import SwButtonGroup from '../button/ButtonGroup.vue'
    import SwButton from '../button/Button.vue'
    export default {
        name: 'SwAlert',
        model: {
            prop: 'visible',
            event: 'toggle'
        },
        data(){
            return {
                currentVisible: this.visible
            }
        },
        components: {
            SwButton,
            SwButtonGroup,
            SwDialog
        },
        methods: {
            handleClose(){
                this.$emit('toggle')
            },
            handleClick(onHandle){
                onHandle ? onHandle() : this.handleClose()
            }
        },
        computed: {
            currentButtons(){
                return this.buttons ? this.buttons : [{text: '确定', onHandle: this.handleClose}]
            },
            buttonsType(){
                return this.currentButtons.length>2
            }
        },
        watch: {
            visible(val){
                this.currentVisible = val
            },
            currentVisible(val){
                this.$emit('toggle',val)
            }
        },
        props: {
            visible: {
                type: Boolean,
                default: false
            },
            closeButton: {
                type: Boolean,
                default: false
            },
            shadowDisabled: {
                type: Boolean,
                default: false
            },
            title: null,
            content: null,
            buttons: Array
        }
    }
</script>