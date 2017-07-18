<script>
    const demos = [
        {
            title: '基本用法',
            code: `
                  <sw-grid>
                        <sw-row >
                            <sw-col><div class="col-demo-gray">第一列</div></sw-col>
                            <sw-col><div class="col-demo-color">第二列</div></sw-col>
                        </sw-row>
                    </sw-grid>
            `
        },
        {
            title: '布局类型',
            desc: '属性：align，属性值：stretch',
            code: `
                  <sw-grid>
                        <sw-row align="stretch">
                            <sw-col><div class="col-demo">stretch</div></sw-col>
                            <sw-col><div class="col-demo">stretch<br/>stretch</div></sw-col>
                            <sw-col><div class="col-demo">stretch<br/>stretch<br/>stretch</div></sw-col>
                        </sw-row>
                    </sw-grid>
            `
        },
        {
            title: '布局类型',
            desc: '属性：align，属性值：top',
            code: `
                  <sw-grid>
                        <sw-row align="top">
                            <sw-col><div class="col-demo">top</div></sw-col>
                            <sw-col><div class="col-demo">top<br/>top</div></sw-col>
                            <sw-col><div class="col-demo">top<br/>top<br/>top</div></sw-col>
                        </sw-row>
                    </sw-grid>
            `
        },
        {
            title: '布局类型',
            desc: '属性：align，属性值：bottom',
            code: `
                  <sw-grid>
                        <sw-row align="bottom">
                            <sw-col><div class="col-demo">bottom</div></sw-col>
                            <sw-col><div class="col-demo">bottom<br/>bottom</div></sw-col>
                            <sw-col><div class="col-demo">bottom<br/>bottom<br/>bottom</div></sw-col>
                        </sw-row>
                    </sw-grid>
            `
        }
    ]
    import Base from '../base.vue'
    export default {
        name: 'Grid',
        extends:Base,
        data(){
            return {
                demos: demos
            }
        }
    }
</script>

<style lang="less">
    .col-demo{
        padding: .08rem;
        width: 100%;
        border: 0.01rem solid #ddd;
        border-radius: 0.02rem;
        background: #999;
        text-align: center;
        color: #fff;
    }
    .col-demo-gray{
        .col-demo;
        background: #999;
    }
    .col-demo-color{
        .col-demo;
        background: #ff6633;
    }
</style>
