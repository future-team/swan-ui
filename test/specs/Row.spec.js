import Vue from 'vue'
import Row from '../../src/modules/grid/Row.vue'
import { createVm,createVue,destroyVm } from '../util.js'

describe('Row', function() {
    let vm

    afterEach(() => {
        destroyVm(vm)
    })

    it('init', function (){
        vm = createVm(Row)
        expect(vm.$el.classList.contains('ph-row')).toBe(true)
    })

    it('align', function (){
        vm = createVm(Row,{
            align: 'top'
        })
        expect(vm.$el.classList.contains('ph-row-top')).toBe(true)
    })
})