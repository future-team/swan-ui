<template>
    <div :class="[classObject,{'ph-search-bar-focus':focus}]">
        <sw-input ref="searchRef"
                  type='search'
                  phIcon='search'
                  v-model="currentValue"
                  :placeholder="placeholder"
                  clear
                  @input="handleInput"
                  @focus="handleFocus"
                  @blur="handleBlur"
                  @keydown.native.enter="handleKeyDown">
        </sw-input>
        <sw-button v-if="focus"
                   phStyle='link'
                   @click="handleButtonClick">
            {{buttonText}}
        </sw-button>
    </div>
</template>

<script>
    /**
     * 搜索框<br/>
     *
     * @class SearchBar
     * @module 搜索组件
     * @Constructor
     * @extends Base
     * @since 1.0.0
     * @demo search|search.vue
     * @show true
     * */
    import SwBase from '../Base.vue'
    import SwInput from '../input/Input.vue'
    import SwButton from '../button/Button.vue'
    export default {
        name: 'SwSearch',
        extends: SwBase,
        components: {
            SwButton,
            SwInput
        },
        data(){
            return {
                focus: false,
                currentValue: this.value
            }
        },
        methods:{
            /**
             * 输入时触发
             * @event input／change
             * @param 输入值
             */
            handleInput(value){
                this.currentValue = value
                this.$emit('input',value)
                this.$emit('change',value)
            },
            /**
             * 聚焦时触发
             * @event focus
             * @param 
             */
            handleFocus(){
                this.focus = true
                this.$emit('focus')
            },
            /**
             * 失焦时触发
             * @event blur
             * @param 
             */
            handleBlur(){
                this.timer = setTimeout(()=>{
                    this.focus = false
                })
                this.$emit('blur')
            },
            /**
             * 回车时触发
             * @event on-search
             * @param 输入值
             */
            handleKeyDown(evt){
                this.$emit('on-search',this.currentValue,evt)
            },
            /**
             * 点击按钮时触发
             * @event click
             * @param 输入值
             */
            handleButtonClick(evt){
                this.$emit('click',this.currentValue,evt)
            }
        },
        watch: {
            value(val){
                this.currentValue = val
            }
        },
        beforeDestroy(){
            this.timer && clearTimeout(this.timer)
        },
        props: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'search-bar'
             * */
            classPrefix: {
                type: String,
                default: 'search-bar'
            },
            /**
             * 按钮文案
             * @property buttonText
             * @type String
             * @default '取消'
             * */
            buttonText: {
                type: String,
                default: '取消'
            },
            /**
             * 输入提示
             * @property placeholder
             * @type String
             * @default '搜索'
             * */
            placeholder: {
                type: String,
                default: '搜索'
            },
            /**
             * 输入值
             * @property value
             * @type
             * @default
             * */
            value: null
        }
    }
</script>