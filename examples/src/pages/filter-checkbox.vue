<template>
    <div class="demo-top">
        <sw-filter-checkbox-container 
            :data='filterData' 
            :defaultActiveItemGroupIndex='2'
            @confirmBtn-click="onConfirmBtnClick">
        </sw-filter-checkbox-container>
    </div>
</template>

<script>
import Base from '../base.vue'
export default {
    name: 'filtercheckbox',
    extends: Base,
    data() {
        return {
            filterData: [
                {
                    "itemGroupKey": 1,
                    "itemGroupLabel": "上海",
                    "itemList": [
                        {
                            "itemKey": 8067981,
                            "itemLabel": "金悦医疗美容",
                            "disabled": false,
                            "selected": true 
                        },
                        {
                            "itemKey": 3244945,
                            "itemLabel": "韩辉整形外科诊所",
                            "disabled": false,
                            "selected": true 
                        },
                        {
                            "itemKey": 3326527,
                            "itemLabel": "刘娟美甲沙龙",
                            "disabled": false,
                            "selected": false 
                        },
                        {
                            "itemKey": 13893492,
                            "itemLabel": "CS",
                            "disabled": true,
                            "selected": false 
                        },
                        {
                            "itemKey": 21591999,
                            "itemLabel": "上海伊美尔港华整形美容医院",
                            "disabled": false,
                            "selected": false 
                        },
                        {
                            "itemKey": 2368135,
                            "itemLabel": "诗泥SPA",
                            "disabled": true,
                            "selected": false 
                        },
                        {
                            "itemKey": 5687880,
                            "itemLabel": "吉吉靓甲美睫",
                            "disabled": true,
                            "selected": false 
                        },
                        {
                            "itemKey": 23136039,
                            "itemLabel": "京世沙龙",
                            "disabled": false,
                            "selected": false 
                        },
                        {
                            "itemKey": 1799866,
                            "itemLabel": "爱慕整形",
                            "disabled": false,
                            "selected": false 
                        },
                        {
                            "itemKey": 4175103,
                            "itemLabel": "Berrymay健康管理",
                            "disabled": false,
                            "selected": false 
                        },
                        {
                            "itemKey": 18418332,
                            "itemLabel": "安娜美甲美睫沙龙",
                            "disabled": false,
                            "selected": false 
                        },
                        {
                            "itemKey": 23136018,
                            "itemLabel": "京世沙龙",
                            "disabled": true,
                            "selected": false 
                        },
                        {
                            "itemKey": 184183322,
                            "itemLabel": "安娜美甲美睫沙龙",
                            "disabled": false,
                            "selected": false 
                        },
                        {
                            "itemKey": 231360181,
                            "itemLabel": "京世沙龙",
                            "disabled": true,
                            "selected": false 
                        }
                    ]
                },
                {
                    "itemGroupKey": 5,
                    "itemGroupLabel": "南京",
                    "itemList": [
                        {
                            "itemKey": 5602119,
                            "itemLabel": "花子形象",
                            "disabled": true,
                            "selected": false 
                        }
                    ]
                },
                {
                    "itemGroupKey": 3,
                    "itemGroupLabel": "杭州",
                    "itemList": [
                        {
                            "itemKey": 27294361,
                            "itemLabel": "杜尚发型",
                            "disabled": false,
                            "selected": false 
                        },
                        {
                            "itemKey": 6210703,
                            "itemLabel": "杜尚发型",
                            "disabled": false,
                            "selected": false 
                        }
                    ]
                },
                {
                    "itemGroupKey": 11,
                    "itemGroupLabel": "宁波",
                    "itemList": [
                        {
                            "itemKey": 24890244,
                            "itemLabel": "乐在（LOKA）舞蹈工作室",
                            "disabled": false,
                            "selected": true 
                        },
                        {
                            "itemKey": 24277786,
                            "itemLabel": "兰芝",
                            "disabled": true,
                            "selected": true 
                        }
                    ]
                }
            ]
        }
    },
    mounted() {
    },
    methods: {
        onConfirmBtnClick(choose){
            console.log(choose)
        }
    }
}
</script>

<style lang="less" scoped>
    @import '../demo.less';
</style>
