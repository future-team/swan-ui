import Vue from 'vue'
import Image from '../../src/modules/image/Image.vue'
import { createVm,createVue,destroyVm } from '../util.js'

const DEFAULT_IMAGE_URL = 'http://bpic.588ku.com/element_pic/01/47/02/12574338a640011.jpg'
const IMAGE_URL = 'https://www.dpfile.com/sc/ares_pics/f6f4d77d040d9a0ab77e94059d1772c8.png'
describe('Image', function() {
    let vm

    afterEach(() => {
        destroyVm(vm)
    })

    it('init', function (){
        vm = createVm(Image)
        expect(vm.$el.classList.contains('ph-image')).toBe(true)
    })

    it('defaultSrc', function (){
        vm = createVue({
            template: `
                <sw-image :defaultSrc="defaultSrc"></sw-image>
            `,
            components: {
                'sw-image': Image
            },
            data:{
                defaultSrc: DEFAULT_IMAGE_URL
            }
        })
        expect(vm.$el.querySelector('img').getAttribute('src')).toBe(DEFAULT_IMAGE_URL)
    })
})