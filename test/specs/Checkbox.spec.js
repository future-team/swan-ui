import Vue from 'vue'
import Checkbox from '../../src/modules/checkbox/Checkbox.vue'
import { createVm,destroyVm ,createVue} from '../util.js'

describe('Checkbox', function() {
    let vm

    afterEach(() => {
        destroyVm(vm)
    })

    it('init', function (){
        vm = createVm(Checkbox)
        expect(vm.$el.querySelector('.ph-checkbox')).toBeTruthy()
    })

    it('label', function (){
        vm = createVm(Checkbox,{
            label: '展示的文字信息'
        })
        expect(vm.$el.querySelector('span').textContent).toBe('展示的文字信息')
    })

    it('label', function (){
        vm = createVm(Checkbox,{
            label: '展示的文字信息'
        })
        expect(vm.$el.querySelector('span').textContent).toBe('展示的文字信息')
    })

    it('disabled', function (){
        vm = createVm(Checkbox,{
            disabled:  true
        })
        expect(vm.$el.querySelector('input').getAttribute('disabled')).toBeTruthy()
    })
})