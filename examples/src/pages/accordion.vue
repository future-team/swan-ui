<script>
    const demos = [
        {
            title: '基本用法',
            desc: '查看静态数据',
            code: `
                   <sw-accordion v-model="visible">
                    <template slot="header">
                        <label>销售量</label>
                    </template>
                    <sw-list>
                        <sw-list-item>
                            <sw-list-col>1月： 5000份</sw-list-col>
                        </sw-list-item>
                        <sw-list-item>
                            <sw-list-col>2月： 4500份</sw-list-col>
                        </sw-list-item>
                    </sw-list>
                </sw-accordion>`,
            options: {
                data(){
                    return {
                        visible: false
                    }
                }
            }
        },
        {
            title: '基本用法',
            desc: '从下拉列表选择',
            code: `
                   <sw-accordion v-model="visible">
                        <template slot="header">{{selected}}</template>
                        <ul class="accordion-demo-list">
                               <li v-for="item in list"
                                   class="accordion-demo-item"
                                   @click="handleClick(item)">{{item}}</li>
                        </ul>
                   </sw-accordion>`,
            options: {
                data(){
                    return {
                        visible: false,
                        list: ['单店','连锁店'],
                        selected: '请选择'
                    }
                },
                methods: {
                    handleClick(item){
                        this.selected=item
                        this.visible = false
                    }
                }
            }
        }
    ]
    import Base from '../base.vue'
    export default {
        name: 'PageAccordion',
        extends:Base,
        data(){
            return {
                demos: demos
            }
        }
    }
</script>

<style>
    .accordion-demo-list{
        margin-left: 0.32rem;
    }

    .accordion-demo-item{
        height: 0.88rem;
        line-height: 0.88rem;
        border-bottom: 1px solid #eee;
        font-size: 0.28rem;
    }
</style>