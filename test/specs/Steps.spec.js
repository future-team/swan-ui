import Vue from 'vue'
import Steps from '../../src/modules/steps/Steps.vue'
import { createVm,createVue,destroyVm } from '../util.js'

Vue.component(Steps.name,Steps)
describe('Steps', function() {
    let vm

    afterEach(() => {
        destroyVm(vm)
    })

    it('list', function (){
         vm = createVue({
            template: `
                <sw-steps :currentStep="1"
                          :list="['申请提交','财务一级审批','支付中','支付成功']"/>
            `
        })
        expect(vm.$el.querySelector('.active').textContent.trim()).toBe('财务一级审批')
    })
})