<template>
<div>
    <h3 class="comp-type"><strong>SwTabSet</strong></h3>
    <h3 class="comp-type">defaultActiveIndex(默认0) 默认选中选项卡的索引值</h3>
    <SwTabSet defaultActiveIndex="1">
        <SwTab heading="标题1" :index="1">
            横向内容1
        </SwTab>
        <SwTab heading="标题2" :index="2">
            横向内容2
        </SwTab>
    </SwTabSet>

    <h3 class="comp-type">vertical(默认false) 设置选项卡竖排</h3>
    <SwTabSet vertical>
        <SwTab heading="标题1"  :index="1">
            <SwList>
                <SwListItem>
                    <SwListCol>竖向内容1</SwListCol>
                </SwListItem>
            </SwList>
        </SwTab>
        <SwTab heading="标题2" :index="2">
            竖向内容2
        </SwTab>
        <SwTab heading="标题3" :index="3">
            竖向内容3
        </SwTab>
    </SwTabSet>
    <br/>

    <h3 class="comp-type">width(默认33) 设置vertical之后标题的占比</h3>
    <SwTabSet vertical width="20">
        <SwTab heading="标题1" :index="1">
            <SwList>
                <SwListItem>
                    <SwListCol>竖向内容1</SwListCol>
                </SwListItem>
            </SwList>
        </SwTab>
        <SwTab heading="标题2" :index="2">
            <SwList>
                <SwListItem>
                    <SwListCol>竖向内容2</SwListCol>
                </SwListItem>
            </SwList>
        </SwTab>
    </SwTabSet>
    <br/>

    <h3 class="comp-type">clickCallback(SwTabSet) 点击选项卡的回调函数</h3>
    <SwTabSet @clickCallback="clickCallback">
        <SwTab heading="标题1" :index="1">
            横向内容1
        </SwTab>
        <SwTab heading="标题2" :index="2">
            横向内容2
        </SwTab>
    </SwTabSet>

    <h3 class="comp-type"><strong>SwTab</strong></h3>
    <h3 class="comp-type">heading 标题</h3>
    <SwTabSet>
        <SwTab heading="SwTab heading 1" :index="1">
            横向内容1
        </SwTab>
        <SwTab heading="SwTab heading 2" :index="2">
            横向内容2
        </SwTab>
    </SwTabSet>

    <h3 class="comp-type">clickCallback(SwTab) 点击单个选项卡的回调函数</h3>
    <SwTabSet>
        <SwTab heading="标题1" @clickCallback="clickCallback1" :index="1">
            横向内容1
        </SwTab>
        <SwTab heading="标题2" :index="2">
            横向内容2
        </SwTab>
    </SwTabSet>
</div>
</template>

<script>
    export default {
        name: 'tabset',
        data(){
            return {
            }
        },
        methods: {
            clickCallback(index){
                alert("测试tabset回调 index: " + index);
            },

            clickCallback1(index){
                alert("测试tab回调 index: " + index);
            }

        }
    }
</script>
