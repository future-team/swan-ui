import Vue from 'vue'
import Input from '../../src/modules/input/Input.vue'
import { createVm,createVue,destroyVm } from '../util.js'

describe('Input', function() {
    let vm

    afterEach(() => {
        destroyVm(vm)
    })

    it('init', function (){
        vm = createVm(Input)
        expect(vm.$el.classList.contains('ph-input')).toBe(true)
    })

    it('type', function (){
        vm = createVm(Input,{
            type: 'number'
        })
        // console.log(expect(vm.$el))
        expect(vm.$el.querySelector('input').getAttribute('type')).toBe('number')
    })

    it('clear', function (done){
        vm = createVm(Input,{
            clear: true,
            value: '123'
        })
        setTimeout(()=>{
            expect(vm.$el.querySelector('.gfs-icon-close')).toBeTruthy()
            done()
        })
    })

    it('visible', function (done){
        vm = createVm(Input,{
            visible: true,
            type: 'password'
        })
        setTimeout(()=>{
            expect(vm.$el.querySelector('.gfs-icon-visible')).toBeTruthy()
            done()
        })
    })

    it('error', function (done){
        vm = createVm(Input,{
            error: true
        })

        setTimeout(()=>{
            expect(vm.$el.querySelector('.gfs-icon-error')).toBeTruthy()
            done()
        })
    })
})