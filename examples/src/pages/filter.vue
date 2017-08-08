<template>
    <div class="demo-top">
        <sw-filter-container
            :filterData="filterData" @valid-filter-change="onValidFilterChange">
        </sw-filter-container>
    </div>
</template>

<script>
import Base from '../base.vue'
export default {
    name: 'filter',
    extends: Base,
    data() {
        return {
            filterData: [
                {   
                    type: 'single-row',
                    activeKey: '-1',
                    activeValue: '选择商区',
                    panelData: [
                        {key:'sjgy',value:'世纪公园'},
                        {key:'ljz',value:'陆家嘴'},
                        {key:'bbb',value:'八佰伴'},
                        {key:'pdxq',value:'浦东新区'},
                        {key:'zb',value:'闸北'},
                        {key:'ja',value:'静安'},
                        {key:'yp',value:'杨浦'},
                        {key:'sjgy1',value:'世纪公园1'},
                        {key:'ljz1',value:'陆家嘴1'},
                        {key:'bbb1',value:'八佰伴1'},
                        {key:'pdxq1',value:'浦东新区1'},
                        {key:'zb1',value:'闸北1'},
                        {key:'ja1',value:'静安1'},
                        {key:'yp1',value:'杨浦1'}
                    ]
                },
                {   
                    type: 'double-row',
                    activeKey: '2082',
                    activeValue: '雅思',
                    panelData: [
                        {
                            key:'2072',
                            value:'外语',
                            subPanelData: [
                                {
                                    key:'2082',
                                    value:'雅思'
                                },
                                {
                                    key:'2083',
                                    value:'英语'
                                },
                                {
                                    key:'2084',
                                    value:'托福'
                                }
                            ]

                        },
                        {
                            key: '2033',
                            value: '音乐',
                            subPanelData: []
                        },
                        {
                            key: '2055',
                            value: '美术',
                            subPanelData: [
                                {
                                    key:'2066',
                                    value:'素描'
                                },
                                {
                                    key:'2067',
                                    value:'写生'
                                },
                                {
                                    key:'2068',
                                    value:'油彩'
                                }
                            ]
                        }
                    ]
                },
                {   
                    type: 'single-row',
                    activeKey: '1',
                    activeValue: '智能排序',
                    panelData: [
                        {key:'1',value:'智能排序'},
                        {key:'2',value:'离我最近'},
                        {key:'3',value:'人气最高'},
                        {key:'4',value:'评价最好'},
                        {key:'5',value:'人均最低'},
                        {key:'6',value:'人均最高'}
                    ]
                }
            ]
        }
    },
    mounted() {
    },
    methods: {
        onValidFilterChange(validFilterData){
            console.log(validFilterData)
        }
    }
}
</script>
<style lang="less" scoped>
    @import '../demo.less';
</style>
