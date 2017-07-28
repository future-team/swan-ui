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
     * SearchBar<br/>
     * - 可通过buttonText设置按钮的文字
     *
     * 属性：
     * - buttonText: 按钮文字 <br/>
     * - placeholder: 输入提示
     *
     * 事件：
     * - input／change: 回调参数(value,evt)，输入时触发 <br/>
     * - focus: 聚焦时触发 <br/>
     * - blur: 失去焦点时触发 <br/>
     * - search: 回调参数(value,evt)，按下回车时触发 <br/>
     * - click: 回调参数(value,evt)，按钮被点击时触发
     *
     * @class SearchBar
     * @module 搜索组件
     * @extends Component
     * @constructor
     * @since 0.0.1
     * @demo search|search.js {展示}
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
            handleInput(value,evt){
                this.currentValue = value
                this.$emit('input',value,evt)
                this.$emit('change',value,evt)
            },
            handleFocus(){
                this.focus = true
                this.$emit('focus')
            },
            handleBlur(){
                this.timer = setTimeout(()=>{
                    this.focus = false
                })
                this.$emit('blur')
            },
            handleKeyDown(evt){
                this.$emit('search',this.currentValue,evt)
            },
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