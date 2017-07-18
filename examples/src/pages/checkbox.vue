<script>
    const demos = [
        {
            title: '基本用法',
            desc: '',
            code: `
                        <sw-checkbox label="选项一"  value="1" checked/>
                        <sw-checkbox label="选项二"  value="2" />`
        },
        {
            title: '禁用状态',
            desc: '属性：disabled',
            code: `
                        <sw-checkbox label="选项三"  value="3" disabled />
                        <sw-checkbox label="选项四"  value="4" disabled />`
        },
        {
            title: 'change事件',
            desc: '',
            code: `
                        <sw-checkbox label="选项一"  value="1"  @change="handleChange" :checked="selected.indexOf(1) != -1"/>
                        <sw-checkbox label="选项二"  value="2"  @change="handleChange"/>`,
            options: {
                data(){
                    return {
                        selected: [1]
                    }
                },
                methods: {
                    handleChange(val){
                        let index = this.selected.indexOf(val)
                        if(index == -1){
                            this.selected.push(val)
                        }else{
                            this.selected.splice(index,1)
                        }
                        alert(this.selected)
                    }
                }
            }
        }
    ]
    import Base from '../base.vue'
    export default {
        name: 'Checkbox',
        extends:Base,
        data(){
            return {
                demos: demos
            }
        }
    }
</script>


