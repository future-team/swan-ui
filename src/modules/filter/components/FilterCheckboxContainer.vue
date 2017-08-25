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
                            :label="itemGroup.value"
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
                            v-for="(item, index) in activeItemGroupItems.children"
                            :key="index"
                            :itemIndex="index"
                            :disabled="item.disabled"
                            :checked="item.selected"
                            :label="item.value"
                            @itemIndex-change="onItemIndexChange">
                        </item>
		            </div>
		        </div>
		        <div class="ph-button-group ph-button-group-footer clearfix">
		            <button class="ph-button ph-button-lg ph-button-primary" @click="onConfirmBtnClick">
                        <span>确定</span>
                    </button>
		        </div>
		    </div>
		</div>
    </div>
</div>
</template>
<script>
   /**
    * 筛选
    * ```code
    *    <sw-filter-checkbox
    *        :data='filterData' 
    *        :activeIndex='2'>
    *    </sw-filter-checkbox>
    * ```
    * data数据结构：
    * ```code
    * [
    *   {
    *       "key": 3,
    *       "value": "杭州",
    *       "children": [
    *           {
    *               "key": 27294361,
    *                "value": "杜尚发型",
    *                "disabled": false,
    *               "selected": false
    *            }
    *       ]
    *   },
    *   {
    *        "key": 11,
    *        "value": "宁波",
    *        "children": [
    *           {
    *               "key": 24890244,
    *               "value": "乐在（LOKA）舞蹈工作室",
    *               "disabled": false,
    *               "selected": true
    *           }
    *       ]
    *   }
    * ]
    *```
    * @class FilterCheckbox
    * @module 筛选控件
    * @extends Component
    * @constructor
    * @since 1.0.0
    * @demo filter-checkbox|filter-checkbox.vue
    * @show true
    * */
    import SwBase from '../../Base.vue'
    import Item from './FilterItemCheckBox'
    import ItemGroup from './FilterItemGroup'
    import uniq from '../../../utils/uniq.js'
    export default {
        name: 'SwFilterCheckbox',
        extends: SwBase,
        components: {
            Item,
            ItemGroup
        },
        props: {
           /**
            * 数据
            * @property data
            * @type Array
            * @default []
            * */
            data: {
                type: Array,
                default(){
                    return []
                }
            },
            activeIndex: { // 初始激活的ItemGroup的索引值
                type: [String, Number],
                default: 0
            }
        },
        data() {
            return {
                activeItemGroupIndex: this.activeIndex // 激活的ItemGroup的索引值
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
                if (this.activeItemGroupItems && this.activeItemGroupItems.children && this.activeItemGroupItems.children.length) {
                    let validItemList = this.activeItemGroupItems.children.filter((item) => item.disabled == false)
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
                    if (this.activeItemGroupItems && this.activeItemGroupItems.children && this.activeItemGroupItems.children.length) {
                        this.activeItemGroupItems.children.forEach(function(element) {
                            if (totalItemChecked) {
                                element.selected = true
                            } else {
                                element.selected = false
                            }
                        }, this)
                    }
                } else {
                    this.activeItemGroupItems.children[itemIndex].selected = !this.activeItemGroupItems.children[itemIndex].selected
                }
            },
            /**
             * 点击确定触发
             * @event on-confirm
             * @param {Array} 选中的每个子项的key
             */
            onConfirmBtnClick(){
                let choose = []
                if (this.data && this.data.length) {
                    this.data.forEach(function(itemGroup) {
                        itemGroup.children.forEach(function(item) {
                            if (item.selected && !item.disabled) {
                                choose.push(item.key)
                            }
                        }, this)
                    }, this)
                }
                choose = uniq(choose)
                this.$emit('on-confirm', choose)
            }
        }
    }
</script>