import Vue from 'vue'
import Col from '../../src/modules/grid/Col.vue'
import { createVm,createVue,destroyVm } from '../util.js'

describe('Col', function() {
    let vm

    afterEach(() => {
        destroyVm(vm)
    })

    it('init', function (){
        vm = createVm(Col)
        expect(vm.$el.classList.contains('ph-col')).toBe(true)
    })

    it('width', function (){
        vm = createVm(Col,{
            width: 23
        })
        expect(vm.$el.classList.contains('ph-col-23')).toBe(true)
    })

    it('align', function (){
        vm = createVm(Col,{
            align: 'top'
        })
        expect(vm.$el.classList.contains('ph-col-top')).toBe(true)
    })

    it('offset', function (){
        vm = createVm(Col,{
            offset: 23
        })
        expect(vm.$el.classList.contains('ph-col-offset-23')).toBe(true)
    })
})