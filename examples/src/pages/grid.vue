<script>
    const demos = [
        {
            title: '行布局',
            desc: '属性：align，默认值：stretch，若各列未设置高度或设为auto，将占满整个容器的高度',
            code: `
                  <sw-grid>
                        <sw-row align="stretch" class="row-demo">
                            <sw-col>stretch</sw-col>
                            <sw-col>stretch</sw-col>
                            <sw-col>stretch</sw-col>
                        </sw-row>
                  </sw-grid>
            `
        },
        {
            title: '行布局-顶边对齐',
            desc: '属性：align，属性值：top',
            code: `
                  <sw-grid>
                        <sw-row align="top" class="row-demo">
                            <sw-col class="col-1">top</sw-col>
                            <sw-col class="col-2">top</sw-col>
                            <sw-col class="col-3">top</sw-col>
                        </sw-row>
                  </sw-grid>
            `
        },
        {
            title: '行布局-底边对齐',
            desc: '属性：align，属性值：bottom',
            code: `
                  <sw-grid>
                        <sw-row align="bottom" class="row-demo">
                            <sw-col class="col-1">bottom</sw-col>
                            <sw-col class="col-2">bottom</sw-col>
                            <sw-col class="col-3">bottom</sw-col>
                        </sw-row>
                  </sw-grid>
            `
        },
        {
            title: '行布局-中点对齐',
            desc: '属性：align，属性值：center',
            code: `
                  <sw-grid>
                        <sw-row align="center" class="row-demo">
                            <sw-col class="col-1">center</sw-col>
                            <sw-col class="col-2">center</sw-col>
                            <sw-col class="col-3">center</sw-col>
                        </sw-row>
                  </sw-grid>
            `
        },
        {
            title: '行布局-第一行文字基线对齐',
            desc: '属性：align，属性值：baseline',
            code: `
                  <sw-grid>
                        <sw-row align="baseline" class="row-demo">
                            <sw-col class="col-1">baseline</sw-col>
                            <sw-col class="col-2">baseline</sw-col>
                            <sw-col class="col-3">baseline</sw-col>
                        </sw-row>
                  </sw-grid>
            `
        },
        {
            title: '列布局-宽度占比',
            desc: '属性：width，属性值：宽度百分比',
            code: `
                  <sw-grid>
                        <sw-row class="row-demo">
                            <sw-col :width="25">占比25%</sw-col>
                            <sw-col>第二列</sw-col>
                        </sw-row>
                  </sw-grid>
            `
        },
        {
            title: '列布局-偏移',
            desc: '属性：offset，属性值：宽度百分比',
            code: `
                  <sw-grid>
                        <sw-row class="row-demo">
                            <sw-col :width="25" >第一列</sw-col>
                            <sw-col :offset="10">偏移10%</sw-col>
                        </sw-row>
                  </sw-grid>
            `
        }
    ]
    import Base from '../base.vue'
    export default {
        name: 'PageGrid',
        extends:Base,
        data(){
            return {
                demos: demos
            }
        }
    }
</script>

<style lang="less">
    .col-demo-gray{
        background: #999;
    }
    .col-demo-color{
        background: #ff6633;
    }
    .row-demo .ph-col{
        background: #ff6633;
        margin-right: 0.1rem;
    }
    .row-demo{
        height: 1.5rem;
        background: #eee;
        color: #fff;
        text-align: center;
    }
    .col-1{
        height: 1rem;
        line-height: 1rem;
    }
    .col-2{
        height: 0.7rem;
        line-height: 0.7rem;
    }
    .col-3{
        height: 1.2rem;
        line-height: 1.2rem;
    }
</style>
