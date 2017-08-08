import Popup from '../../src/modules/popup/Popup.vue'
import { createVm ,createVue,destroyVm } from '../util'

describe('Popup', function() {
    let vm

    afterEach(() => {
        destroyVm(vm)
    })

    it('init', function (){
        vm = createVm(Popup)
        expect(vm.$el.classList.contains('ph-popup')).toBe(true)
    })

    it('visible', function (){
        vm = createVm(Popup,{
            visible: true
        })
        expect(vm.$el.querySelector('.ph-popup-main')).toBeTruthy()
    })
})