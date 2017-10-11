<template>
    <div class="ph-filter-occupy"  >
        <div class="ph-filter-container" :class="{'ph-filter-container-shadow': activeNavIndex != -1}">
            <div class="ph-filter-shadow" @click="onShadowClick"></div>
            <ul class="cat ph-row ph-filter-header" >
                <li v-for="(item, index) in data" 
                    class="ph-col ph-filter-header-item" 
                    :key="index" 
                    :class="{'active': index == activeNavIndex}" 
                    @click="onNavClick(index)">
                    <a href="javascript:;">
                        <span class="ph-filter-header-text">{{item.activeValue}}</span>
                        <span class="gfs-icon ph-icon ph-icon-sm ph-icon-default icon-expand-more"></span>
                    </a>
                </li>
            </ul>
            <div v-for="(item, index) in data" :key="index">
                <filter-single-row v-if="item.type == 'single-row'" 
                                   :data="item" 
                                   :show="activeNavIndex == index" 
                                   @close-shadow="onShadowClick" 
                                   @valid-filter="onValidFilterChange"></filter-single-row>
                <filter-double-row v-if="item.type == 'double-row'" 
                                   :data="item" 
                                   :show="activeNavIndex == index" 
                                   @close-shadow="onShadowClick" 
                                   @valid-filter="onValidFilterChange"></filter-double-row>
            </div>
        </div>
    </div>
</template>
<script>
   /**
    * 筛选
    * ```code
    * <sw-filter :data="filterData"></sw-filter>
    * ```
    * data数据结构,type: 'single-row'表示单列，type: 'double-row'表示双列
    * ```code
    *[
    *    {   
    *        type: 'single-row',
    *        activeKey: '-1',
    *        activeValue: '选择商区',
    *        panelData: [
    *            {key:'sjgy',value:'世纪公园'},
    *            {key:'ljz',value:'陆家嘴'}
    *        ]
    *    },
    *    {   
    *        type: 'double-row',
    *        activeKey: '2082',
    *        activeValue: '雅思',
    *        panelData: [
    *            {
    *                key:'2072',
    *                value:'外语',
    *                subPanelData: [
    *                    {
    *                        key:'2082',
    *                        value:'雅思'
    *                    }
    *                ]
    *            },
    *            {
    *                key: '2033',
    *                value: '音乐',
    *                subPanelData: []
    *            }
    *        ]
    *    },
    *    {   
    *        type: 'single-row',
    *        activeKey: '1',
    *        activeValue: '智能排序',
    *        panelData: [
    *            {key:'1',value:'智能排序'},
    *            {key:'2',value:'离我最近'},
    *            {key:'3',value:'人气最高'},
    *            {key:'4',value:'评价最好'},
    *            {key:'5',value:'人均最低'},
    *            {key:'6',value:'人均最高'}
    *        ]
    *    }
    *]
    * ```
    * @class Filter
    * @module 筛选控件
    * @extends Component
    * @constructor
    * @since 1.0.0
    * @demo filter|filter.vue
    * @show true
    * */
    import SwBase from '../../Base.vue'
    import FilterSingleRow from './FilterSingleRow.vue'
    import FilterDoubleRow from './FilterDoubleRow.vue'
    import Logger from '../../../utils/logger.js'
    export default {
        name: 'SwFilter',
        extends: SwBase,
        components: {
            FilterSingleRow,
            FilterDoubleRow
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
                default: []
            }
        },
        data() {
            return {
                activeNavIndex: -1
            }
        },
        created(){
            new Logger('Filter')
        },
        methods: {
            onNavClick(activeNavIndex){
                if (activeNavIndex == this.activeNavIndex) {
                    this.activeNavIndex = -1
                } else {
                    this.activeNavIndex = activeNavIndex
                }
            },
            onShadowClick(){
                this.activeNavIndex = -1
            },
            /**
             * 点击某一项触发
             * @event on-select
             * @param {Array} 当前选中的所有选项，例如：[{key: "ljz", value: "陆家嘴"}]
             */
            onValidFilterChange(){
                let activeFilterData = []
                if (this.data && this.data.length) {
                    this.data.forEach(function(panelData) {
                        let activePanelData = {
                            key: panelData.activeKey,
                            value: panelData.activeValue
                        }
                        activeFilterData.push(activePanelData)
                    }, this)
                }
                this.$emit('on-select', activeFilterData)
            }
        }
    }
</script>