import Button from '../../src/modules/button/Button.vue'
import ButtonGroup from '../../src/modules/button/ButtonGroup.vue'
import { createVm ,createVue,destroyVm } from '../util'

describe('ButtonGroup', function() {
    let vm

    afterEach(() => {
        destroyVm(vm)
    })

    it('init', function (){
        vm = createVm(ButtonGroup)
        expect(vm.$el.classList.contains('ph-button-group')).toBe(true)
    })

    it('phType', function (){
        vm = createVm(ButtonGroup,{
            phType: 'justify'
        })
        expect(vm.$el.classList.contains('ph-button-group-justify')).toBe(true)
    })

    it('click', done=>{
        vm = createVue({
            template: `
                <sw-button-group phType="justify">
                    <sw-button :hollow="active1 != 'button1'" @click="active1='button1'">美团</sw-button>
                    <sw-button :hollow="active1 != 'button2'" @click="active1='button2'">点评</sw-button>
                </sw-button-group>
            `,
            data(){
                return { active1: 'button2'}
            },
            components: {
                'sw-button-group': ButtonGroup,
                'sw-button': Button
            }
        })

        vm.$el.querySelector('.ph-button').click()

        setTimeout(()=>{
            expect(vm.active1).toBe('button1')
            done()
        })

    })

})