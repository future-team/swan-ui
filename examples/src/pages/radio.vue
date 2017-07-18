<script>
    const demos = [
        {
            title: '基本用法',
            desc: '',
            code: `
                        <sw-radio  :checked="selected == 1" label="选项一"  value="1" name='radio' @change="handleChange"/>
                        <sw-radio  label="选项二"  value="2" name='radio' @change="handleChange"/>
                        <sw-radio  label="选项三"  value="3"  @change="handleChange" disabled/>`,
            options: {
                data(){
                    return {
                        selected: 1
                    }
                },
                methods: {
                    handleChange(val){
                        this.selected = val
                    }
                }
            }

        }
    ]
    import Base from '../base.vue'
    export default {
        name: 'Radio',
        extends:Base,
        data(){
            return {
                demos: demos
            }
        }
    }
</script>