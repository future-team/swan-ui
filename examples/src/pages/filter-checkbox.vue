<template>
    <div class="demo-top">
        <sw-filter-checkbox
            :data='filterData' 
            :activeIndex='2'
            @on-confirm="handleConfirm">
        </sw-filter-checkbox>
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
                    "key": 1,
                    "value": "上海",
                    "children": [
                                    {
                                        "key": 8067981,
                                        "value": "金悦医疗美容",
                                        "disabled": false,
                                        "selected": true 
                                    },
                                    {
                                        "key": 3244945,
                                        "value": "韩辉整形外科诊所",
                                        "disabled": false,
                                        "selected": true 
                                    },
                                    {
                                        "key": 3326527,
                                        "value": "刘娟美甲沙龙",
                                        "disabled": false,
                                        "selected": false 
                                    },
                                    {
                                        "key": 13893492,
                                        "value": "CS",
                                        "disabled": true,
                                        "selected": false 
                                    },
                                    {
                                        "key": 21591999,
                                        "value": "上海伊美尔港华整形美容医院",
                                        "disabled": false,
                                        "selected": false 
                                    },
                                    {
                                        "key": 2368135,
                                        "value": "诗泥SPA",
                                        "disabled": true,
                                        "selected": false 
                                    },
                                    {
                                        "key": 5687880,
                                        "value": "吉吉靓甲美睫",
                                        "disabled": true,
                                        "selected": false 
                                    },
                                    {
                                        "key": 23136039,
                                        "value": "京世沙龙",
                                        "disabled": false,
                                        "selected": false 
                                    },
                                    {
                                        "key": 1799866,
                                        "value": "爱慕整形",
                                        "disabled": false,
                                        "selected": false 
                                    },
                                    {
                                        "key": 4175103,
                                        "value": "Berrymay健康管理",
                                        "disabled": false,
                                        "selected": false 
                                    },
                                    {
                                        "key": 18418332,
                                        "value": "安娜美甲美睫沙龙",
                                        "disabled": false,
                                        "selected": false 
                                    },
                                    {
                                        "key": 23136018,
                                        "value": "京世沙龙",
                                        "disabled": true,
                                        "selected": false 
                                    },
                                    {
                                        "key": 184183322,
                                        "value": "安娜美甲美睫沙龙",
                                        "disabled": false,
                                        "selected": false 
                                    },
                                    {
                                        "key": 231360181,
                                        "value": "京世沙龙",
                                        "disabled": true,
                                        "selected": false 
                                    }
                                ]
                                },
                                {
                                "key": 5,
                                "value": "南京",
                                "children": [
                                    {
                                        "key": 5602119,
                                        "value": "花子形象",
                                        "disabled": true,
                                        "selected": false 
                                    }
                                ]
                                },
                                {
                                "key": 3,
                                "value": "杭州",
                                "children": [
                                    {
                                        "key": 27294361,
                                        "value": "杜尚发型",
                                        "disabled": false,
                                        "selected": false 
                                    },
                                    {
                                        "key": 6210703,
                                        "value": "杜尚发型",
                                        "disabled": false,
                                        "selected": false 
                                    }
                                ]
                                },
                                {
                                "key": 11,
                                "value": "宁波",
                                "children": [
                                    {
                                        "key": 24890244,
                                        "value": "乐在（LOKA）舞蹈工作室",
                                        "disabled": false,
                                        "selected": true 
                                    },
                                    {
                                        "key": 24277786,
                                        "value": "兰芝",
                                        "disabled": true,
                                        "selected": true 
                                    }
                                ]
                                }
                            ]
        }
    },
    methods: {
        handleConfirm(choose){
            console.log(choose)
        }
    }
}
</script>

<style lang="less" scoped>
    @import '../demo.less';
</style>
