<template>
    <div class="doc">
        <div class="doc-item" v-for="item in buttons">
            <h5>{{item.title}}</h5>
            <show-more :code="item.code">
                <div>
                    <sw-button>默认按钮</sw-button>
                    <sw-button hollow >空心按钮</sw-button>
                    <sw-button phStyle="link">文字按钮</sw-button>
                </div>
                <pre slot="code"><code v-html="escape2Html(item.code)" class="language-markup"></code></pre>
            </show-more>
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
    </div>
</template>

<script>
    import CodeShow from "./showmore";
    export default {
        components: {CodeShow},
        name: 'Button',
        data: function(){
            return {
                phIcon: '',
                buttons: [
                    {
                        title: '基本用法',
                        desc: '',
                        code: `
                        <sw-button>默认按钮</sw-button>
                        <sw-button hollow >空心按钮</sw-button>
                        <sw-button phStyle="link">文字按钮</sw-button>`,
                    }
                ]
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
            },
            escape2Html(str) {
                let  map={'<':'&lt;','>':'&gt;'}
                return str.replace(/(<|>)/ig,function(all,t){return map[t]})
            }
        }

    }
</script>

<style lang="less">
    .doc{
        .ph-button{
            margin: 0 .16rem .16rem 0;
        }
    }
</style>


