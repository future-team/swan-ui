import Pullup from '../../src/modules/pullup/Pullup.vue'
import { createVm ,createVue,destroyVm } from '../util'

describe('Pullup', function() {
    let vm

    afterEach(() => {
        destroyVm(vm)
    })

    it('init', function (){
        vm = createVm(Pullup)
        expect(vm.$el.classList.contains('ph-pullup')).toBe(true)
    })

    it('mode', function (){
        vm = createVm(Pullup,{
            mode: 'button'
        })
        expect(vm.$el.querySelector('.ph-button')).toBeTruthy()
    })

    it('status', function (){
        vm = createVm(Pullup,{
            status: 1
        })
        expect(vm.$el.querySelector('.gfs-icon-loading')).toBeTruthy()
    })
})