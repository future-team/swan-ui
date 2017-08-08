<template>
<div class="ph-checkbox-filter"  >
    <div class="ph-filter-occupy" >
		<div class="ph-filter-container ph-filter-container-shadow ph-filter-container-fixed"  >
		    <div class="ph-filter-shadow" ></div>
		    <ul class="cat ph-row ph-filter-header"></ul>
		    <div class="ph-filter-selector ph-filter-selector-buttons"  >
		        <div class="ph-row ph-tabs ph-tabs-vertical"  >
		            <div class="ph-col ph-col-33 ph-tab-navs" >
		                <item-group 
                            v-for="(itemGroup, index) in data" 
                            :itemGroupIndex="index" 
                            :key="index" 
                            :active="activeItemGroupIndex == index" 
                            :label="itemGroup.itemGroupLabel"
                            @activeItemGroupIndex-change="onActiveItemGroupIndexChange">
                        </item-group>
		            </div>
		            <div class="ph-col ph-tab-bd">
                        <item
                            :key="-1"
                            :itemIndex="-1"
                            :disabled="false"
                            :checked="totalItemChecked"
                            label="全部"
                            @itemIndex-change="onItemIndexChange">
                        </item>
		                <item 
                            v-for="(item, index) in activeItemGroupItems.itemList"
                            :key="index"
                            :itemIndex="index"
                            :disabled="item.disabled"
                            :checked="item.selected"
                            :label="item.itemLabel"
                            @itemIndex-change="onItemIndexChange">
                        </item>
		            </div>
		        </div>
		        <div class="ph-button-group ph-button-group-footer clearfix">
		            <button class="ph-button ph-button-lg ph-button-primary" @click="onConfirmBtnClick"><span>确定</span></button>
		        </div>
		    </div>
		</div>
    </div>
</div>
</template>
<script>
    /**
     * @class FilterCheckboxContainer
     * @module 控件类组件
     * @extends Base
     * @Constructor
     * @since 0.0.1
     * @demo FilterCheckboxContainer|FilterCheckboxContainer.vue
     * @show true
     */
    import SwBase from '../../Base.vue'
    import Item from './FilterItemCheckBox'
    import ItemGroup from './FilterItemGroup'
    import uniq from '../../../utils/uniq.js'
    export default {
        name: 'SwFilterCheckboxContainer',
        extends: SwBase,
        components: {
            Item,
            ItemGroup
        },
        props: {
            data: {
                type: Array,
                default(){
                    return []
                }
            },
            defaultActiveItemGroupIndex: { // 初始激活的ItemGroup的索引值
                type: [String, Number],
                default: 0
            }
        },
        data () {
            return {
                activeItemGroupIndex: this.defaultActiveItemGroupIndex // 激活的ItemGroup的索引值
            }
        },
        computed: {
            // 激活的ItemGroup的索引值对应的Items数组
            activeItemGroupItems(){
                let activeItemGroupItems = {}
                if (this.data && this.data.length) {
                    activeItemGroupItems = this.data[this.activeItemGroupIndex]
                }
                return activeItemGroupItems
            },
            // 全部是否选中
            totalItemChecked(){
                let totalItemChecked = false
                if (this.activeItemGroupItems && this.activeItemGroupItems.itemList && this.activeItemGroupItems.itemList.length) {
                    let validItemList = this.activeItemGroupItems.itemList.filter((item) => item.disabled == false)
                    let validCheckedNum = 0
                    validItemList.forEach(function(element) {
                        if (element.selected) {
                            validCheckedNum = validCheckedNum + 1
                        }
                    }, this)
                    if (validCheckedNum == validItemList.length) {
                        totalItemChecked = true
                    }
                }
                return totalItemChecked
            }
        },
        mounted () {
        },
        methods: {
            // 点击确定按钮
            onButtonClick(){
                // this.$emit('main-key-change', this.groupIndex)
            },
            // 选中的itemGroup改变
            onActiveItemGroupIndexChange(activeItemGroupIndex){
                this.activeItemGroupIndex = activeItemGroupIndex
            },
            // 选中的item改变
            onItemIndexChange(itemIndex){
                if (itemIndex == -1) { // 全部
                    let totalItemChecked = false
                    if (this.totalItemChecked) { // 之前为全部选中
                        totalItemChecked = false // 之前为全部选中，再次点击全部则反选
                    } else {
                        totalItemChecked = true  // 之前没有全部选中，再次点击全部则全部选中
                    }
                    if (this.activeItemGroupItems && this.activeItemGroupItems.itemList && this.activeItemGroupItems.itemList.length) {
                        this.activeItemGroupItems.itemList.forEach(function(element) {
                            if (totalItemChecked) {
                                element.selected = true
                            } else {
                                element.selected = false
                            }
                        }, this)
                    }
                } else {
                    this.activeItemGroupItems.itemList[itemIndex].selected = !this.activeItemGroupItems.itemList[itemIndex].selected
                }
            },
            // 确定按钮点击
            onConfirmBtnClick(){
                let choose = []
                if (this.data && this.data.length) {
                    this.data.forEach(function(itemGroup) {
                        itemGroup.itemList.forEach(function(item) {
                            if (item.selected && !item.disabled) {
                                choose.push(item.itemKey)
                            }
                        }, this)
                    }, this)
                }
                choose = uniq(choose)
                this.$emit('confirmBtn-click', choose)
            }
        }
    }
</script>