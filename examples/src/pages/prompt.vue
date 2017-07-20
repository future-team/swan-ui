<script>
    const demos = [
        {
            title: '基本用法',
            code: `
                <div>{{text}}</div>
                <sw-button @click="visible = true">默认Prompt</sw-button>
                <sw-prompt v-model="visible"
                           title="这是标题"
                           content="这是内容"
                           shadowDisabled closeButton
                           @confirm="handleConfirm"
                           :onClose="handleClose"></sw-prompt>`,
            options: {
                data(){
                    return {
                        visible: false,
                        text: ''
                    }
                },
                methods: {
                    handleConfirm(value){
                        if(!value){
                            alert('请输入数值...')
                        }else{
                            this.text = value
                            this.visible = false
                        }
                    },
                    handleClose(){
                        alert('关闭')
                    }
                }
            }
        },
        {
            title: '定制按钮',
            code: `
                <div>{{text}}</div>
                <sw-button @click="visible = true">默认Prompt</sw-button>
                <sw-prompt v-model="visible"
                           title="这是标题"
                           content="这是内容"
                           shadowDisabled closeButton
                           :buttons="[{text: '确定', onHandle: handleConfirm}]"></sw-prompt>`,
            options: {
                data(){
                    return {
                        visible: false,
                        text: ''
                    }
                },
                methods: {
                    handleConfirm(value){
                        if(!value){
                            alert('请输入数值...')
                        }else{
                            this.text = value
                            this.visible = false
                        }
                    }
                }
            }
        }
    ]
    import Base from '../base.vue'
    export default {
        name: 'Dialog',
        extends:Base,
        data(){
            return {
                demos: demos
            }
        }
    }
</script>