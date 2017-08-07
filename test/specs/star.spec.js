import Vue from 'vue'
import Star from '../../src/modules/star/Star.vue'
import { createVm,createVue,destroyVm } from '../util.js'

describe('Star', function() {
    let vm

    afterEach(() => {
        destroyVm(vm)
    })

    it('init', function (){
        vm = createVm(Star)
        expect(vm.$el.classList.contains('ph-star')).toBe(true)
        expect(vm.$props.phSize).toBe('sm')
    })

    it('phSize', function (){
        vm = createVm(Star,{
            phSize: 'lg'
        })
        expect(vm.$el.classList.contains('ph-star-lg')).toBe(true)
    })

    it('rate', function (){
        vm = createVm(Star,{
            rate: 35
        })
        expect(vm.$el.classList.contains('ph-star-35')).toBe(true)
    })
})