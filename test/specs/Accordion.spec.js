import Vue from 'vue'
import Accordion from '../../src/modules/accordion/Accordion.vue'
import { createVm,destroyVm } from '../util.js'

describe('Accordion', function() {
    let vm

    afterEach(() => {
        destroyVm(vm)
    })

    it('init', function (){
        let defaultData = Accordion.data()
        expect(defaultData.height).toBe(0)
    })

    it('hideIcon', function (){
        vm = createVm(Accordion,{
            hideIcon: true
        })
        expect(vm.$el.querySelector('.icon-expand-more')).not.toBeTruthy()
    })

    it('setHeight', function (){
        vm = createVm(Accordion)
        vm.visible = true
        spyOn(vm, 'setHeight')

        Vue.nextTick(()=>{
            expect(vm.setHeight).toHaveBeenCalled()
        })
    })
})