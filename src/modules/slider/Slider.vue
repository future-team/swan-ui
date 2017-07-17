<template>
    <div :class="[classObject,{'ph-keep-range':showRange}]">
        <div v-if="showTipMode" class="ph-slider-text">{{currentProgress}}</div>
        <div v-if="showRange" class="ph-slider-range">
            <strong class="ph-slider-range-start">{{range[0]}}</strong>
            <strong class="ph-slider-range-end">{{range[1]}}</strong>
        </div>
        <div class="ph-slider-line" ref="sliderLine">
            <div class="ph-slider-progress" ref="sliderProgress"></div>
            <div class="ph-slider-content" ref="sliderBtn">
                <div :class="['ph-slider-tip',tipVisible && !showTipMode ? 'show':'hide']">{{currentProgress}}</div>
                <sw-drag class="ph-slider-btn" @drag="handleDrag" @drop="handleDrop"></sw-drag>
            </div>
        </div>
    </div>
</template>

<script>
    import SwBase from '../Base.vue'
    import SwDrag from '../drag/Drag.vue'
    export default {
        name: 'SwSlider',
        extends: SwBase,
        components: {SwDrag},
        data(){
            return {
                showTipMode: this.tipMode === 'default',
                currentProgress: this.progress || this.range[0],
                tipVisible: this.tipStay || false
            }
        },
        methods:{
            handleDrag(evt,position){
                let newProgress, nowSec

                this.preX = position.start.x
                this.X = position.move.x
                this.distance = this.X - this.preX

                this.prevProgressWidth = this.newProgressWidth + this.distance

                if(this.prevProgressWidth <= 0) this.prevProgressWidth = 0
                if(this.prevProgressWidth >= this.sliderLength) this.prevProgressWidth = this.sliderLength
                nowSec = Math.round(this.prevProgressWidth / this.eachSection, 0)
                this.prevProgressWidth = this.eachSection * nowSec

                newProgress = this.prevProgressWidth/this.sliderLength * this.rangeDiff + this.range[0]

                this.setSliderPosition(this.prevProgressWidth + 'px')

                this.tipVisible = true
                this.currentProgress = parseInt(newProgress)
            },
            handleDrop(){
                if(!this.tipStay){
                    this.tipVisible = false
                }
                this.newProgressWidth = this.prevProgressWidth
                this.$emit('slide-end',this.currentProgress)
            },
            getNewProgressWidth(currentProgress){ // 保留2位小数
                return this.sliderLength * (Math.round((currentProgress-this.range[0])/this.rangeDiff*100)/100)
            },
            setSliderPosition(distance){
                this.$refs.sliderProgress.style.width = distance
                this.$refs.sliderBtn.style.left = distance
            }
        },
        computed:{
            rangeDiff(){
                return this.range[1]-this.range[0]
            }
        },
        mounted(){
            this.sliderLength = parseInt(this.$refs.sliderLine.offsetWidth)
            this.eachSection = this.sliderLength/this.rangeDiff * this.duration
            this.newProgressWidth = this.getNewProgressWidth(this.currentProgress)
            this.setSliderPosition(this.newProgressWidth + 'px')
        },
        watch: {
            progress(val){
                this.currentProgress = val
                this.newProgressWidth = this.getNewProgressWidth(val)
                this.setSliderPosition(this.newProgressWidth + 'px')
            }
        },
        props:{
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'slider'
             * */
            classPrefix: {
                type: String,
                default: 'slider'
            },
            /**
             * 初始进程,默认0
             * @property progress
             * @type Number
             * */
            progress: {
                type: Number,
                default: 0
            },
            /**
             * 进程提示的位置,默认top
             * @property placement
             * @type String
             * @default 'top'
             * */
            placement: {
                type: String,
                default: 'top'
            },
            /**
             * 范围，默认0-100，可传固定范围的数组如：[25,50]
             * @property range
             * @type Array
             * @default [0,100]
             * */
            range: {
                type: Array,
                default: function () {
                    return [0,100]
                },
                validator(val){
                    return val.length === 2 && val[0] <= val[1]
                }
            },
            /**
             * 是否在进度条前后显示范围
             * @property showRange
             * @type Boolean
             * @default false
             * */
            showRange: {
                type: Boolean,
                default: false
            },
            /**
             * 显示提示的模式，可选[default,tooltip]
             * @property tipMode
             * @type String
             * @default 'default'
             * */
            tipMode: {
                type: String,
                default: 'default'
            },
            /**
             * 每次移动的固定距离，默认1
             * @property duration
             * @type Number
             * @default 1
             * */
            duration: {
                type: Number,
                default: 1,
                validator(){
                    return true
                }
            },
            /**
             * 初始及松开按钮时是否显示tooltip
             * @property tipStay
             * @type Boolean
             * @default false
             * */
            tipStay: {
                type: Boolean,
                default: false
            },
            /**
             * 进度条是否只读
             * @property disabled
             * @type Boolean
             * @default false
             * */
            disabled: Boolean,
            classMapping: {
                type: Object,
                default: function() {
                    return {
                        'disabled': 'disabled',
                        'top': 'tip-top',
                        'bottom': 'tip-bottom'
                    }
                }
            }

        }
    }
</script>