import Icon from '../../src/modules/icon/Icon.vue'
import { createVm ,createVue,destroyVm } from '../util'

describe('Icon', function() {
    let vm

    afterEach(() => {
        destroyVm(vm)
    })

    it('init', function (){
        vm = createVm(Icon)
        expect(vm.$el.classList.contains('ph-icon')).toBe(true)
    })

    it('phIcon', function (){
        vm = createVm(Icon,{
            phIcon: 'loading-white'
        })
        expect(vm.$el.classList.contains('gfs-icon-loading')).toBeTruthy()
    })

    it('phSize', function (){
        vm = createVm(Icon,{
            phSize: 'sm'
        })
        expect(vm.$el.classList.contains('ph-icon-sm')).toBe(true)
    })

    it('phStyle', function (){
        vm = createVm(Icon,{
            phStyle: 'warning'
        })
        expect(vm.$el.classList.contains('ph-icon-warning')).toBe(true)
    })
})