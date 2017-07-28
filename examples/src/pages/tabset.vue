<template>
<div>
    <h3 class="comp-type"><strong>sw-tab-set</strong></h3>
    <h3 class="comp-type">defaultActiveIndex(缺省选中第一个选项卡) 首次选中选项卡的索引值</h3>
    <sw-tab-set defaultActiveIndex="1">
        <sw-tab heading="标题1" :index="1">
            横向内容1
        </sw-tab>
        <sw-tab heading="标题2" :index="2">
            横向内容2
        </sw-tab>
    </sw-tab-set>

    <h3 class="comp-type">vertical(默认false) 设置选项卡竖排</h3>
    <sw-tab-set vertical>
        <sw-tab heading="标题1"  :index="1">
            <sw-list>
                <sw-list-item>
                    <sw-list-col>竖向内容1</sw-list-col>
                </sw-list-item>
            </sw-list>
        </sw-tab>
        <sw-tab heading="标题2" :index="2">
            竖向内容2
        </sw-tab>
        <sw-tab heading="标题3" :index="3">
            竖向内容3
        </sw-tab>
    </sw-tab-set>
    <br/>

    <h3 class="comp-type">width(默认33) 设置vertical之后标题的占比</h3>
    <sw-tab-set vertical width="20">
        <sw-tab heading="标题1" :index="1">
            <sw-list>
                <sw-list-item>
                    <sw-list-col>竖向内容1</sw-list-col>
                </sw-list-item>
            </sw-list>
        </sw-tab>
        <sw-tab heading="标题2" :index="2">
            <sw-list>
                <sw-list-item>
                    <sw-list-col>竖向内容2</sw-list-col>
                </sw-list-item>
            </sw-list>
        </sw-tab>
    </sw-tab-set>
    <br/>

    <h3 class="comp-type">tabsetChange(SwTabSet) 点击选项卡的回调函数</h3>
    <sw-tab-set @tab-change="tabsetChange">
        <sw-tab heading="标题1" :index="1">
            横向内容1
        </sw-tab>
        <sw-tab heading="标题2" :index="2">
            横向内容2
        </sw-tab>
    </sw-tab-set>

    <h3 class="comp-type"><strong>SwTab</strong></h3>
    <h3 class="comp-type">heading 标题</h3>
    <sw-tab-set>
        <sw-tab heading="sw-tab heading 1" :index="1">
            横向内容1
        </sw-tab>
        <sw-tab heading="sw-tab heading 2" :index="2">
            横向内容2
        </sw-tab>
    </sw-tab-set>

    <h3 class="comp-type">tabChange(SwTab) 点击单个选项卡的回调函数</h3>
    <sw-tab-set>
        <sw-tab heading="标题1" @tab-change="tabChange" :index="1">
            横向内容1
        </sw-tab>
        <sw-tab heading="标题2" :index="2">
            横向内容2
        </sw-tab>
    </sw-tab-set>
</div>
</template>

<script>
    export default {
        name: 'PageTabset',
        data(){
            return {
            }
        },
        methods: {
            tabsetChange(index){
                alert("测试tabset回调 index: " + index);
            },

            tabChange(index){
                alert("测试tab回调 index: " + index);
            }

        }
    }
</script>
