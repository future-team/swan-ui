<script>
 const demos = [
     {

         title: '基本用法',
         desc: 'closeButton：右上角按钮是否可见\nshadowDisabled：点击蒙层是否可关闭弹框\n on-close：关闭事件是必须的\n',
         code: `
                    <sw-button @click="visible = true">打开对话框</sw-button>
                    <sw-dialog title="提示"
                               v-model="visible"
                               shadowDisabled
                               closeButton>
                        您确定以及肯定要提交吗？
                    </sw-dialog>`,
         options: {
             data(){
                 return {
                     visible: false
                 }
             }
         }
     },
     {

         title: '定制标题、内容、框底',
         desc: 'slot：title、default、footer',
         code: `
                    <sw-button @click="visible = true">打开对话框</sw-button>
                    <sw-dialog v-model="visible"
                               shadowDisabled
                               closeButton>
                        <div slot="title"><span style="color: #ff6633">提示</span></div>
                        <div>成本总计<span style="color: #ff6633">1000</span>元，<br/>您确定以及肯定要提交吗？</div>
                        <div slot="footer">
                            <sw-button-group>
                                <sw-button phSize="md"
                                           hollow
                                           @click="visible = false">取消</sw-button>
                                <sw-button hollow phSize="md" @click="handleConfirm">确定</sw-button>
                            </sw-button-group>
                        </div>
                    </sw-dialog>`,
         options: {
             data(){
                 return {
                     visible: false
                 }
             },
             methods: {
                 handleConfirm(){
                     window.alert('I am sure!!')
                     this.visible = false
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