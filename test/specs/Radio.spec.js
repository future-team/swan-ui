import Vue from 'vue'
import Radio from '../../src/modules/radio/Radio.vue'
import { createVm,destroyVm } from '../util.js'

describe('Radio', function() {
    let vm

    afterEach(() => {
        destroyVm(vm)
    })

    it('init', function (){
        vm = createVm(Radio)
        expect(vm.$el.querySelector('.ph-radio')).toBeTruthy()
    })

    // it('label', function (){
    //     vm = createVm(Radio,{
    //         label: '展示的文字信息'
    //     })
    //     console.log(vm.$el)
    //     expect(vm.$el.querySelector('span').textContent).toBe('展示的文字信息')
    // })

})