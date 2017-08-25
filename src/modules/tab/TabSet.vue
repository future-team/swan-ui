<template>
    <div :class='tabsClassObject'>
        <ul :class='verticalClass'>
            <!--tab标题-->
            <li class='ph-col ph-tab-nav' 
                :class="{'active': item.index == activeIndex}" 
                v-for='(item, index) in tabbarList' 
                :key='item.index' 
                @click='onTabClick(item.index)'>
                <a href='javascript:;'>{{item.heading}}</a>
            </li>
        </ul>
        <!--tab内容-->
        <div :class='contentClassObject'><slot></slot></div>
    </div>
</template>

<script>
    /**
     * @class Tabset
     * @module 选项卡
     * @extends Base
     * @Constructor
     * @since 1.0.0
     * @demo Tabset|Tabset.vue
     * @show true
     */
    import SwBase from '../Base.vue'
    export default {
        name: 'SwTabSet',
        extends: SwBase,
        props: {
           /**
            * 是否竖排
            * @property vertical
            * @type Boolean
            * @default false || null
            * */
            vertical: {
                type: Boolean,
                default: false
            },
           /**
            * 设置选项卡头部的宽度，只有竖排的情况下才起作用
            * @property width
            * @type Number
            * @default 20
            * */
            width: {
                type: Number,
                default: 20
            },
           /**
            * 指定默认选中的选项卡，默认为0
            * @property index
            * @type Number
            * @default 
            * */
            defaultActiveIndex: {
                type: [Number, String]
            }
        },
        data () {
            return {
                tabbarList: [],
                activeIndex: this.defaultActiveIndex
            }
        },
        computed: {
            tabsClassObject(){
                return {
                    'ph-tabs': true,
                    'ph-tabs-vertical ph-row': this.vertical
                }
            },
            contentClassObject(){
                return {
                    'ph-tab-bd': true,
                    'ph-col': this.vertical
                }
            },
            verticalClass(){
                let verticalClass = ''
                verticalClass = {
                    'ph-tab-navs': true,
                    'ph-row': !this.vertical,
                    'ph-col': this.vertical
                }
                if (this.vertical && this.width) {
                    let key = 'ph-col-' + this.width
                    verticalClass[key] = this.vertical
                }
                return verticalClass
            }
        },
        mounted () {
            this.updateTabbar()
        },
        methods: {
            getTabs(){
                return this.$children.filter(function (item) {
                    let name = item.$options.name
                    return name == 'SwTab'
                })
            },
            updateTabbar(){
                this.tabbarList = []
                this.getTabs().forEach((pane) => {
                    this.tabbarList.push({
                        heading: pane.heading,
                        index: pane.index
                    })
                })
                if (this.defaultActiveIndex == undefined) {
                    this.activeIndex = this.tabbarList[0].index
                }
            },
            /**
             * 点击tab时触发
             * @event tab-change
             * @param 被点击的tab的index（传入的index,不是索引）
             */
            onTabClick(index){
                this.activeIndex = index
                this.$emit('tab-change', this.activeIndex)
            }
        },
        watch: {
            defaultActiveIndex(val){
                this.activeIndex = val
            }
        }
    }
</script>