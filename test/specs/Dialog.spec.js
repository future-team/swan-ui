import Vue from 'vue'
import Dialog from '../../src/modules/modal/Dialog.vue'
import { createVm,createVue,destroyVm } from '../util.js'

Vue.component(Dialog.name,Dialog)
describe('Dialog', function() {
    let vm

    afterEach(() => {
        destroyVm(vm)
    })

    it('visible', function (){
         vm = createVue({
            template: `
                <sw-dialog  title="提示"
                            v-model="visible">
                    您确定以及肯定要提交吗？
                </sw-dialog>
            `,
            data(){
                return {
                    visible: true
                }
            }
        })
        expect(vm.$el.querySelector('.ph-dialog-body').textContent.trim()).toBe('您确定以及肯定要提交吗？')
    })

    it('shadowDisabled', function (){
         vm = createVue({
            template: `
                <sw-dialog  title="提示"
                            v-model="visible">
                    您确定以及肯定要提交吗？
                </sw-dialog>
            `,
            data(){
                return {
                    visible: true
                }
            }
        })
        vm.$el.querySelector('.ph-dialog-shadow').click()
        expect(vm.visible).toBe(false)
    })
    
    it('closeButton', function (){
         vm = createVue({
            template: `
                <sw-dialog  title="提示"
                            v-model="true"
                            closeButton>
                    您确定以及肯定要提交吗？
                </sw-dialog>
            `
        })
        expect(vm.$el.querySelector('.show')).toBeTruthy()
    })
})