import Vue from 'vue'
import Grid from '../../src/modules/grid/Grid.vue'
import { createVm,createVue,destroyVm } from '../util.js'

describe('Grid', function() {
    let vm

    afterEach(() => {
        destroyVm(vm)
    })

    it('init', function (){
        vm = createVm(Grid)
        expect(vm.$el.classList.contains('ph-grid')).toBe(true)
    })
})