import Button from '../../src/modules/button/Button.vue'
import { createVm ,createVue,destroyVm } from '../util'

describe('Button', function() {
    let vm

    afterEach(() => {
        destroyVm(vm)
    })

    it('create', function (){
        vm = createVm(Button)
        expect(vm.$el.classList.contains('ph-button')).toBe(true)
    })

    it('icon', function (){
        vm = createVm(Button,{
            phIcon: 'loading-white'
        })
        expect(vm.$el.querySelector('.icon-loading-white')).toBeTruthy()
    })

    it('phSize', function (){
        vm = createVm(Button,{
            phSize: 'sm'
        })
        expect(vm.$el.classList.contains('ph-button-sm')).toBe(true)
    })

    it('phStyle', function (){
        vm = createVm(Button,{
            phStyle: 'warning'
        })
        expect(vm.$el.classList.contains('ph-button-warning')).toBe(true)
    })

    it('block', function (){
        vm = createVm(Button,{
            block: true
        })
        expect(vm.$el.classList.contains('ph-button-block')).toBe(true)
    })

    it('radius', function (){
        vm = createVm(Button,{
            radius:  true
        })
        expect(vm.$el.classList.contains('ph-button-radius')).toBe(true)
    })

    it('hollow', function (){
        vm = createVm(Button,{
            hollow: true
        })
        expect(vm.$el.classList.contains('ph-button-hollow')).toBe(true)
    })

    it('disabled', function (){
        vm = createVm(Button,{
            disabled:  true
        })
        expect(vm.$el.classList.contains('ph-button-disabled')).toBe(true)
    })

    it('active', function (){
        vm = createVm(Button,{
            active:  true
        })
        expect(vm.$el.classList.contains('ph-button-active')).toBe(true)
    })

    it('stable', function (){
        vm = createVm(Button,{
            stable:  true
        })
        expect(vm.$el.classList.contains('ph-button-stable')).toBe(true)
    })

    it('click', done => {
        let result
        vm = createVue({
            template: `
                <sw-button @click="handleClick"></sw-button>
            `,
            methods: {
                handleClick(evt) {
                    result = evt
                }
            },
            components: {
                'sw-button': Button
            }
        })
        vm.$el.click()

        setTimeout(() => {
            expect(result).toBeTruthy()
            done()
        })
    })
})