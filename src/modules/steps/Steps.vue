<template>
    <div :class="classObject">
        <div class="ph-steps-line">
            <div class="ph-steps-progress" :style="{width:currentStep_ * (1/(list.length-1))*100+'%'}"></div>
            <ul class="ph-steps-content">
                <li v-for="(item,index) in list"
                    :class="['ph-steps-list',currentStep_ == index ? 'active':index<currentStep_? 'done':'']"
                    :style="{left:index/(list.length-1)*100+'%'}"
                    @click="handleClick(item,index)">
                    <span class="ph-steps-dot"></span>
                    <p>{{item}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    /**
     * @class Steps
     * @module 操作类组件
     * @extends Base
     * @Constructor
     * @since 0.0.1
     * @demo steps|steps.vue
     * @show true
     */
    import SwBase from '../Base.vue'
    export default {
        name: 'SwSteps',
        extends: SwBase,
        data(){
            return {
                currentStep_ : this.currentStep
            }
        },
        methods: {
            handleClick(item,index){
                if(this.readOnly){return}
                this.$emit('click',item,index)
            }
        },
        watch: {
            currentStep(val){
                this.currentStep_ = val
            }
        },
        props: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'steps'
             * */
            classPrefix: {
                type: String,
                default: 'steps'
            },
            /**
             * 是否为只读模式（只读模式不会触发点击回调）
             * @property readOnly
             * @type Boolean
             * @default false
             **/
            readOnly: {
                type: Boolean,
                default: false
            },
            /**
             * steps内容数组，把每一步的文案放入数组中作为list的值
             * @property list
             * @type Array
             * @default []
             **/
            list: {
                type: Array,
                default: ()=>[]
            },
            /**
             * 当前处于第几步，默认为0，也就是说所有的步骤都没有开始，如果到第一步的话将currentStep设置为1即可，注意currentStep不可以超过list数组长度
             * @property currentStep
             * @type Number
             * @default 0
             **/
            currentStep: {
                type: Number,
                default: 0
            }
        }
    }
</script>