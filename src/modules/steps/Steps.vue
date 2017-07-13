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
    import SwBase from '../Base.vue'
    export default {
        name: 'SwSteps',
        extends: SwBase,
        data(){
            return {
                currentStep_ : this.currentStep
            }
        },
        computed:{

        },
        methods: {
            handleClick(item,index){
                if(this.readOnly){return}
                this.currentStep_ = index
                this.$emit('click',item,index)
            }
        },
        props: {
            classPrefix: {
                type: String,
                default: 'steps'
            },
            readOnly: {
                type: Boolean,
                default: false
            },
            list: {
                type: Array,
                default: ()=>[]
            },
            currentStep: {
                type: Number,
                default: 0
            }
        }
    }
</script>