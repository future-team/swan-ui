<template>
    <div class="edit-demo">
        <sw-list>
            <sw-list-header>选择团购</sw-list-header>
            <sw-grid class="deal">
                <sw-row>
                    <sw-col :width="30" class="image-col">
                        <sw-image class="image" phSize="contain" :src="dealInfo.imageUrl"></sw-image>
                    </sw-col>
                    <sw-col>
                        <sw-row>{{dealInfo.title}}</sw-row>
                        <sw-row>{{dealInfo.date}}</sw-row>
                        <sw-row align="bottom" class="primary-color">¥ {{dealInfo.price}}</sw-row>
                    </sw-col>
                </sw-row>
            </sw-grid>
        </sw-list>
        <sw-list>
            <sw-list-header>填选优惠信息</sw-list-header>
            <sw-list-item>
                <sw-list-col heading class="primary-color">所有顾客</sw-list-col>
                <sw-list-col tail>
                    <sw-checkbox :checked="allUserChecked"/>
                </sw-list-col>
            </sw-list-item>
            <sw-list-item>
                <sw-list-col heading>
                    <label>立减金额（元）</label>
                </sw-list-col>
                <sw-list-col>
                    <sw-input type="text" placeholder="需要大于6.8元，小于团购价"/>
                </sw-list-col>
            </sw-list-item>
            <sw-list-item>
                <sw-list-col heading>
                    <label>每日最大售卖量</label>
                </sw-list-col>
                <sw-list-col>
                    <sw-input type="text" placeholder="不能小于10份"/>
                </sw-list-col>
            </sw-list-item>
            <sw-list-item>
                <sw-list-col heading>
                    <label>售卖价（元）</label>
                </sw-list-col>
                <sw-list-col>
                    <sw-input type="text" :value="90"/>
                </sw-list-col>
            </sw-list-item>
            <sw-list-item>
                <sw-list-col heading>
                    <label>每日限购量</label>
                </sw-list-col>
                <sw-list-col>
                    <sw-input type="text" value="76"/>
                </sw-list-col>
            </sw-list-item>
        </sw-list>
        <sw-list>
            <hr/>
            <sw-list-item>
                <sw-list-col heading class="primary-color">品牌顾客</sw-list-col>
                <sw-list-col tail>
                    <sw-checkbox :checked="userChecked"/>
                </sw-list-col>
            </sw-list-item>
            <sw-list-item>
                <sw-list-col heading>
                    <label>立减金额（元）</label>
                </sw-list-col>
                <sw-list-col>
                    <sw-input type="text" placeholder="需要大于6.8元，小于团购价"/>
                </sw-list-col>
            </sw-list-item>
            <sw-list-item>
                <sw-list-col heading>
                    <label>每日最大售卖量</label>
                </sw-list-col>
                <sw-list-col>
                    <sw-input type="text" placeholder="不能小于10份"/>
                </sw-list-col>
            </sw-list-item>
            <sw-list-item>
                <sw-list-col heading>
                    <label>售卖价（元）</label>
                </sw-list-col>
                <sw-list-col>
                    <sw-input type="text" :value="68"/>
                </sw-list-col>
            </sw-list-item>
            <sw-list-item>
                <sw-list-col heading>
                    <label>每日限购量</label>
                </sw-list-col>
                <sw-list-col>
                    <sw-input type="text" placeholder="每人每日可享份数"/>
                </sw-list-col>
            </sw-list-item>
        </sw-list>
        <sw-list>
            <sw-list-header>设定优惠时间</sw-list-header>
            <sw-list-item navigate>
                <sw-list-col heading>
                    <label>售卖开始时间</label>
                </sw-list-col>
                <sw-list-col tail>
                    <sw-input type="text" placeholder="请选择" readonly/>
                </sw-list-col>
            </sw-list-item>
            <sw-list-item navigate>
                <sw-list-col heading>
                    <label>售卖结束时间</label>
                </sw-list-col>
                <sw-list-col tail>
                    <sw-input type="text" placeholder="请选择" readonly/>
                </sw-list-col>
            </sw-list-item>
        </sw-list>
        <div class="fix-button">
            <sw-button block>发布</sw-button>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'PageEdit',
        data(){
            return {
                dealInfo: {
                    imageUrl: "https://fuss10.elemecdn.com/b/2e/a6c333694efb4db66c6a3ba07e9d8jpeg.jpeg?imageMogr2/thumbnail/200x200/format/webp/quality/85",
                    title: "纽斯单人浴+足疗组合套餐",
                    date: "2016-08-26 至 2016-09-26",
                    price: "85"
                },
                allUserChecked: true,
                userChecked: true
            }
        },
        methods: {
            handleClick(){
                window.open('https://cn.vuejs.org/v2/api/#v-on','_blank')
            }
        }
    }
</script>

<style lang="less" scoped>
    .edit-demo{
        margin-top: 1rem;
        margin-bottom: 1.5rem;
        .deal{
            padding: 0.2rem;
            .image-col{
                margin-right: 0.2rem;
                .image{
                    width: 100%;
                    height: 100%;
                }
            }
        }  
    }
    .ph-list-item .ph-list-col-heading{
        width: 40%;
    }
    .primary-color{
        color: #ff6633;
    }
    .fix-button{
        padding: 0.2rem;
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color: #fff;
    }
</style>