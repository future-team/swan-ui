<script>
    const demos = [
        {
            title: '基本用法',
            code: `
                    <sw-list>
                        <sw-list-header>列表标题</sw-list-header>
                        <sw-list-item>
                            <sw-list-col>
                                <sw-input type="text" value="请输入" />
                            </sw-list-col>
                        </sw-list-item>
                    </sw-list>`
        },
        {
            title: '居左居右',
            desc: '属性：heading、tail',
            code: `
                    <sw-list style="color: #fff;">
                        <sw-list-item>
                            <sw-list-col heading style="background: #ff6633">
                                <label>heading</label>
                            </sw-list-col>
                            <sw-list-col tail style="background: #bbb">
                                 <label>tail</label>
                            </sw-list-col>
                        </sw-list-item>
                        <sw-list-item>
                            <sw-list-col style="background: #ff6633">
                                <label>无heading</label>
                            </sw-list-col>
                            <sw-list-col style="background: #bbb">
                                 <label> 无tail</label>
                            </sw-list-col>
                        </sw-list-item>
                    </sw-list>`
        },
        {
            title: '禁用状态',
            desc: '属性：disabled',
            code: `
                    <sw-list>
                        <sw-list-item disabled>
                            <sw-list-col>
                                <sw-input type="text" value="请输入" />
                            </sw-list-col>
                        </sw-list-item>
                    </sw-list>`
        },
        {
            title: 'Error状态',
            desc: '属性：error，文本为红色',
            code: `
                    <sw-list>
                         <sw-list-item error>
                            <sw-list-col heading>
                                <label>姓名</label>
                            </sw-list-col>
                            <sw-list-col>
                                <sw-input type="text" placeholder="请输入" value="error" clear error/>
                            </sw-list-col>
                        </sw-list-item>
                    </sw-list>`
        },
        {
            title: '是否必需',
            desc: '属性：required，前面有红色星',
            code: `
                    <sw-list>
                          <sw-list-item required>
                            <sw-list-col>
                                <sw-input type="text" placeholder="请输入姓名"/>
                            </sw-list-col>
                          </sw-list-item>
                    </sw-list>`
        },
        {
            title: '右箭头',
            desc: '属性：navigate',
            code: `
                    <sw-list>
                          <sw-list-item navigate>
                            <sw-list-col heading>
                                <label>性别</label>
                            </sw-list-col>
                            <sw-list-col tail>
                                <sw-input type="text" p
                                          placeholder="男/女"
                                          @click.native="handleClick"
                                          disabled/>
                            </sw-list-col>
                        </sw-list-item>
                    </sw-list>`,
            options: {
                methods: {
                    handleClick(){
                        window.open('https://cn.vuejs.org/v2/api/#v-on','_blank')
                    }
                }
            }
        }
    ]
    import Base from '../base.vue'
    export default {
        name: 'List',
        extends:Base,
        data(){
            return {
                demos: demos
            }
        }
    }
</script>