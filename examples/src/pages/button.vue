<template>
    <div class="doc">
        <div class="doc-item">
            <h5>基本用法</h5>
            <sw-button>默认按钮</sw-button>
            <sw-button hollow >空心按钮</sw-button>
            <sw-button phStyle="link">文字按钮</sw-button>
        </div>
        <div class="doc-item">
            <h5>不同颜色</h5>
            <sw-button phStyle="primary">primary</sw-button>
            <sw-button phStyle="gray">gray</sw-button>
            <sw-button phStyle="danger">danger</sw-button>
            <sw-button phStyle="success">success</sw-button>
            <sw-button phStyle="warning">warning</sw-button>
            <sw-button phStyle="error">error</sw-button>
            <sw-button phStyle="info">info</sw-button>
        </div>

        <div class="doc-item">
            <h5>空心按钮</h5>
            <sw-button hollow>hollow</sw-button>
            <sw-button hollow phStyle="gray">hollow</sw-button>
            <sw-button hollow phStyle="success">hollow</sw-button>
            <sw-button hollow phStyle="warning">hollow</sw-button>
        </div>

        <div class="doc-item">
            <h5>不同尺寸</h5>
            <div><sw-button phSize="sm">sm</sw-button></div>
            <div><sw-button phSize="md">md</sw-button></div>
            <div><sw-button phSize="lg">lg</sw-button></div>
        </div>

        <div  class="doc-item">
            <h5>禁用状态</h5>
            <sw-button disabled>disabled</sw-button>
            <sw-button hollow disabled>disabled</sw-button>
        </div>

        <div  class="doc-item">
            <h5>占行按钮</h5>
            <sw-button block hollow>提交</sw-button>
            <sw-button block>提交</sw-button>
        </div>

        <div class="doc-item">
            <h5>图标按钮</h5>
            <sw-button phIcon="loading-white"  phSize="lg" >整体居中</sw-button>
            <sw-button phIcon="loading-white"  phSize="lg" stable>文字居中</sw-button>
        </div>

        <div class="doc-item">
            <h5>点击事件</h5>
            <sw-button :phIcon="phIcon" block @click="handleClick">{{phIcon?'加载中':'点我提交'}}</sw-button>
            <!--<sw-button :phIcon="phIcon" block @click.native="handleClick">{{phIcon?'加载中':'点我提交'}}</sw-button>-->

        </div>

        <div class="doc-item">
            <h5>参数</h5>
            <table>
                <thead>
                   <tr>
                       <th>参数</th>
                       <th>类型</th>
                       <th>可选值</th>
                       <th>默认值</th>
                       <th>说明</th>
                   </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>phSize</th>
                        <th>String</th>
                        <th>sm、md、lg</th>
                        <th>sm</th>
                        <th>大小</th>
                    </tr>
                    <tr>
                        <th>phStyle</th>
                        <th>String</th>
                        <th>primary、warning、danger、info、error、success、link、gray</th>
                        <th>primary</th>
                        <th>颜色</th>
                    </tr>
                    <tr>
                        <th>disabled</th>
                        <th>Boolean</th>
                        <th>-</th>
                        <th>false</th>
                        <th>禁用状态</th>
                    </tr>
                    <tr>
                        <th>active</th>
                        <th>Boolean</th>
                        <th>-</th>
                        <th>false</th>
                        <th>激活状态</th>
                    </tr>
                    <tr>
                        <th>block</th>
                        <th>Boolean</th>
                        <th>-</th>
                        <th>false</th>
                        <th>是否占行</th>
                    </tr>
                    <tr>
                        <th>phIcon</th>
                        <th>String</th>
                        <th>loading-gray、loading-white</th>
                        <th>-</th>
                        <th>图标类型</th>
                    </tr>
                    <tr>
                        <th>stable</th>
                        <th>Boolean</th>
                        <th>-</th>
                        <th>false</th>
                        <th>与phIcon搭配使用，设置stable，图标不会影响文字位置</th>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="doc-item">
            <h5>事件</h5>
            <table>
                <thead>
                <tr>
                    <th>名称</th>
                    <th>回调参数</th>
                    <th>说明</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>click</th>
                    <th>evt</th>
                    <th>按钮被点击时的回调</th>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="doc-item">
            <h5>slot</h5>
            <table>
                <thead>
                <tr>
                    <th>名称</th>
                    <th>说明</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>-</th>
                    <th>按钮名称</th>
                </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'Button',
        data: function(){
            return {
                phIcon: ''
            }
        },
        methods: {
            handleClick: function(evt){
                if(!this.phIcon){
                    this.phIcon = 'loading-white'
                    setTimeout(()=>{
                        this.phIcon = ''
                    },2000)
                }
                console.log(evt)
            }
        }
    }
</script>

<style lang="less">
    .doc{
        padding: 0 0.5rem;
        margin: 0.2rem 0;
        h5{
            margin-bottom: 0.1rem;
        }
        .ph-button{
            margin: 0 .16rem .16rem 0;
        }
    }
    .doc-item{
        margin-bottom: 0.5rem;
    }

    table{
        border-collapse: collapse;
        width: 100%;
        background-color: #fff;
        color: #5e6d82;
        font-size: 0.14rem;
        text-align: left;
    }
    table th,table td {
        border-bottom: 0.01rem solid #eaeefb;
        padding: 0.1rem;
        max-width: 2.5rem;
    }


</style>


