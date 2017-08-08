import Vue from 'vue'
import TabSet from '../../src/modules/tab/TabSet.vue'
import { createVm,createVue,destroyVm } from '../util.js'

describe('TabSet', function() {
    let vm

    afterEach(() => {
        destroyVm(vm)
    })

    it('vertical', function (done){
        vm = createVm(TabSet,{
            vertical: true
        })

        setTimeout(()=>{
            expect(vm.$el.classList.contains('ph-tabs-vertical')).toBe(true)
            done()
        })
    })
})