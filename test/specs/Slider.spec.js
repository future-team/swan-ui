import Slider from '../../src/modules/slider/Slider.vue'
import { createVm ,createVue,destroyVm } from '../util'

describe('Slider', function() {
    let vm

    afterEach(() => {
        destroyVm(vm)
    })

    it('init', function (){
        vm = createVm(Slider)
        expect(vm.$el.classList.contains('ph-slider')).toBe(true)
    })

    it('progress', function (){
        vm = createVm(Slider,{
            progress: 20
        })
        expect(vm.$el.querySelector('.ph-slider-text').textContent).toBe('20')
    })

    it('placement', function (){
        vm = createVm(Slider,{
            placement: 'bottom'
        })
        expect(vm.$el.classList.contains('ph-slider-tip-bottom')).toBeTruthy()
    })

    it('range', function (){
        vm = createVm(Slider,{
            range: [0,70],
            showRange: true
        })
        expect(vm.$el.querySelector('.ph-slider-range-end').textContent).toBe('70')
    })

    it('showRange', function (){
        vm = createVm(Slider,{
            showRange: false
        })
        expect(vm.$el.classList.contains('ph-slider-range')).toBe(false)
    })

    it('tipMode', function (){
        vm = createVm(Slider,{
            tipMode: 'tooltip',
            tipStay: true
        })
        expect(vm.$el.querySelector('.show')).toBeTruthy()
    })

    it('tipStay', function (){
        vm = createVm(Slider,{
            tipStay:  false
        })
        expect(vm.$el.querySelector('.hide')).toBeTruthy()
    })

    it('disabled', function (){
        vm = createVm(Slider,{
            disabled:  true
        })
        expect(vm.$el.classList.contains('ph-slider-disabled')).toBe(true)
    })
})