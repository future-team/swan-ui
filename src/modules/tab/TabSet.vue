<template>
    <div :class='tabsClassObject'>
        <ul :class='verticalClass'>
            <!--tab标题-->
            <li class='ph-col ph-tab-nav' :class="{'active': index == activeIndex}" v-for='(item, index) in navList' :key='index' @click='onNavClick(index)'><a href='javascript:;'>{{item.heading}}</a></li>
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
            className: {
                type: String,
                default: ''
            },
            width: {
                type: [Number, String],
                default: 33
            },
            activeIndex: {
                type: [Number, String],
                default: 0
            },
            onTabChange: {
                type: Function,
                default: null
            }
        },
        data () {
            return {
                navList: []
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
            this.updateNav()
            this.setTabs()
        },
        methods: {
            getTabs(){
                return this.$children.filter(function (item) {
                    let name = item.$options.name
                    return name == 'SwTab'
                })
            },
            setTabs() {
                let self = this
                let tags = this.getTabs()
                tags.forEach((pane, index) => {
                    // let newPane = Object.assign({}, pane)
                    // newPane.index = index
                    // newPane.activeIndex = self.activeIndex
                    // pane = Object.assign({}, newPane)

                    pane.index = index
                    pane.activeIndex = self.activeIndex

                })
            },
            setTabsActiveIndex() {
                let self = this
                let tags = this.getTabs()
                tags.forEach((pane) => {
                    pane.activeIndex = self.activeIndex
                })
            },
            updateNav(){
                this.navList = []
                this.getTabs().forEach((pane) => {
                    this.navList.push({
                        heading: pane.heading
                    })
                })
            },
            onNavClick(index){
                this.activeIndex = index
                // this.setTabsActiveIndex()
                this.$emit('clickCallback', this.activeIndex)
            }
        }
    }
</script>