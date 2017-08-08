import Vue from 'vue'
import Switch from '../../src/modules/switch/Switch.vue'
import { createVm,destroyVm } from '../util.js'

describe('Switch', function() {
    let vm

    afterEach(() => {
        destroyVm(vm)
    })

    it('init', function (){
        vm = createVm(Switch)
        expect(vm.$el.querySelector('.ph-checkbox')).toBeTruthy()
    })
})