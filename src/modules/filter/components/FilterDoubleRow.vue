<template>
    <div v-if='show' class="ph-filter-selector"  >
        <div class="ph-row ph-tabs ph-tabs-vertical"  >
            <div class="ph-col ph-col-33 ph-tab-navs" >
                <!--一级筛选数据  -->
                <item-group
                    v-for="(item, index) in data.panelData" 
                    :itemGroupIndex="index" 
                    :key="index" 
                    :active="index == activeItemGroupIndex" 
                    :label="item.value"
                    @activeItemGroupIndex-change="onActiveItemGroupIndexChange">
                </item-group>
            </div>
            <div class="ph-col ph-tab-bd">
                <!--二级筛选数据  -->
                <item 
                    v-for="(item, index) in activeItemGroupItems"
                    :key="item.key"
                    :itemKey="item.key"
                    :label="item.value"
                    :active="item.key == data.activeKey"
                    @itemKey-change="onItemKeyChange">
                </item>
            </div>
        </div>
    </div>
</template>

<script>
import SwBase from '../../Base.vue'
import Item from './FilterItem.vue'
import ItemGroup from './FilterItemGroup.vue'
export default {
    name: 'SwFilterDoubleRow',
    extends: SwBase,
    components: {
        ItemGroup,
        Item
    },
    props: {               
        data: {
            type: Object,
            default: {}
        },
        show: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            // 激活的itemGroup的索引
            activeItemGroupIndex: this.activeItemGroupIndexMethod()
        }
    },
    computed: {
        // 激活的itemGroup索引对应的二级筛选列表
        activeItemGroupItems(){
            let activeItemGroupItems = []
            if (this.activeItemGroupIndex > -1) {
                activeItemGroupItems = this.data.panelData[this.activeItemGroupIndex].subPanelData
            }
            return activeItemGroupItems
        }
    },
    methods: {
        // 激活的itemGroup的索引
        activeItemGroupIndexMethod(){
            let activeItemGroupIndex = -1
            if (this.data && this.data.panelData && this.data.panelData.length) {
                this.data.panelData.forEach(function(panel, index) {
                    if (this.isActiveItemGroup(index, this.data.activeKey)) {
                        activeItemGroupIndex = index
                    }
                }, this)
                
            }
            return activeItemGroupIndex
        },
        // 指定的itemGroup是不是激活的
        isActiveItemGroup(itemGroupIndex){
            let isActiveItemGroup = false
            if (this.data && this.data.panelData && this.data.panelData.length) {
                if (this.data.panelData[itemGroupIndex].key == this.data.activeKey) {
                    isActiveItemGroup = true
                } else if (this.data.panelData[itemGroupIndex] && this.data.panelData[itemGroupIndex].subPanelData && this.data.panelData[itemGroupIndex].subPanelData.length) {
                    this.data.panelData[itemGroupIndex].subPanelData.forEach(function(subPanel) {
                        if (subPanel.key == this.data.activeKey) {
                            isActiveItemGroup = true
                        }
                    }, this)
                }
                
            }
            return isActiveItemGroup
        },
        // 选中的itemGroup改变
        onActiveItemGroupIndexChange(activeItemGroupIndex){
            this.activeItemGroupIndex = activeItemGroupIndex
            if (this.data && this.data.panelData && this.data.panelData.length && this.data.panelData[activeItemGroupIndex]) {
                if (!this.data.panelData[activeItemGroupIndex].subPanelData || !this.data.panelData[activeItemGroupIndex].subPanelData.length) {
                    this.data.activeKey = this.data.panelData[activeItemGroupIndex].key
                    this.data.activeValue = this.data.panelData[activeItemGroupIndex].value
                    this.$emit('close-shadow')
                    this.$emit('valid-filter')
                }
            }
        },
        // 选中的item改变
        onItemKeyChange(itemKey, value){
            this.data.activeKey = itemKey
            this.data.activeValue = value
            this.$emit('close-shadow')
            this.$emit('valid-filter')
        },
    }
}
</script>