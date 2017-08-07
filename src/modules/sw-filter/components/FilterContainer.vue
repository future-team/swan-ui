<template>
<div class="ph-filter-occupy"  >
    <div class="ph-filter-container" :class="{'ph-filter-container-shadow': activeNavIndex != -1}">
        <div class="ph-filter-shadow" @click="onShadowClick"></div>
        <ul class="cat ph-row ph-filter-header" >
            <li v-for="(item, index) in filterData" :key="index" class="ph-col ph-filter-header-item" :class="{'active': index == activeNavIndex}" @click="onNavClick(index)"><a href="javascript:;"  ><span class="ph-filter-header-text">{{item.activeValue}}</span><span class="gfs-icon ph-icon ph-icon-sm ph-icon-default icon-expand-more"  ></span></a></li>
        </ul>
        <div v-for="(item, index) in filterData" :key="index">
            <filter-single-row v-if="item.type == 'single-row'" :data="item" :show="activeNavIndex == index" @close-shadow="onShadowClick" @valid-filter="onValidFilterChange"></filter-single-row>
            <filter-double-row v-if="item.type == 'double-row'" :data="item" :show="activeNavIndex == index" @close-shadow="onShadowClick" @valid-filter="onValidFilterChange"></filter-double-row>
        </div>
    </div>
</div>
</template>
<script>
    import SwBase from '../../Base.vue'
    import FilterSingleRow from './FilterSingleRow.vue'
    import FilterDoubleRow from './FilterDoubleRow.vue'
    export default {
        name: 'SwFilterContainer',
        extends: SwBase,
        components: {
            FilterSingleRow,
            FilterDoubleRow
        },
        props: {
            filterData: {
                type: Array,
                default: []
            }
        },
        data () {
            return {
                activeNavIndex: -1
            }
        },
        computed: {
        },
        mounted () {
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
            onValidFilterChange(){
                let activeFilterData = []
                if (this.filterData && this.filterData.length) {
                    this.filterData.forEach(function(panelData) {
                        let activePanelData = {
                            key: panelData.activeKey,
                            value: panelData.activeValue
                        }
                        activeFilterData.push(activePanelData)
                    }, this)
                }
                this.$emit('valid-filter-change', activeFilterData)
            }
        }
    }
</script>