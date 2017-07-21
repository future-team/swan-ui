<template>
    <div :class='tabsClassObject'>
        <ul :class='verticalClass'>
            <!--tab标题-->
            <li class='ph-col ph-tab-nav' :class="{'active': item.index == activeIndex}" v-for='(item, index) in tabbarList' :key='item.index' @click='onTabClick(item.index)'><a href='javascript:;'>{{item.heading}}</a></li>
        </ul>
        <!--tab内容-->
        <div :class='contentClassObject'><slot></slot></div>
    </div>
</template>

<script>
    import SwBase from '../Base.vue'
    export default {
        name: 'SwTabSet',
        extends: SwBase,
        props: {
            vertical: {
                type: Boolean,
                default: false
            },
            width: {
                type: [Number, String],
                default: 33
            },
            defaultActiveIndex: {
                type: [Number, String],
                default: undefined
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
            onTabClick(index){
                this.activeIndex = index
                this.$emit('tab-change', this.activeIndex)
            }
        }
    }
</script>