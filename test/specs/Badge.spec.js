import Vue from 'vue'
import Badge from '../../src/modules/badge/Badge.vue'
import { createVm,createVue,destroyVm } from '../util.js'

describe('Badge', function() {
    let vm

    afterEach(() => {
        destroyVm(vm)
    })

    it('init', function (){
        vm = createVm(Badge)
        expect(vm.$el.classList.contains('ph-badge')).toBe(true)
        expect(vm.$props.phStyle).toBe('primary')
    })

    it('phType', function (){
        vm = createVm(Badge,{
            phStyle: 'danger'
        })
        expect(vm.$el.classList.contains('ph-badge-danger')).toBe(true)
    })
})