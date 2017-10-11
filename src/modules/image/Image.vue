<template>
    <div ref="imageParentRef" :class="classObject">
        <img ref="imageRef" :src="currentSrc"  :alt="alt"/>
    </div>
</template>

<script>
    /**
     * 图片组件<br/>
     *
     * @class Image
     * @module 图片
     * @extends Base
     * @Constructor
     * @since 1.0.0
     * @demo image|image.vue
     * @show true
     * */
    import SwBase from '../Base.vue'
    import { getClientHeight,getOffsetTop ,getWindowScrollTop} from '../../utils/tool.js'
    import Logger from '../../utils/logger.js'
    export default {
        name: 'SwImage',
        extends: SwBase,
        data(){
            return {
                load: false,
                currentSrc: this.defaultSrc
            }
        },
        methods: {
            handleScroll(){
                this.lazyLoadImage()
            },
            handleLoadSuccess(img){
                this.imageWidth = img.width
                this.imageHeight = img.height

                this.lazy && window.removeEventListener('scroll', this.handleScroll)
                this.currentSrc = this.src

                this.image = this.$refs.imageRef
                switch(this.phSize){
                    case 'cover':
                        if(this.imageWidth > this.imageHeight){
                            this.image.style.height = '100%'
                            this.image.style.width = this.imageWidth
                        }
                        this.imageWidth > this.imageHeight ? this.image.style.height = '100%' :  this.image.style.width = '100%'
                        break
                    case 'contain':
                        this.imageWidth > this.imageHeight ? this.image.style.width = '100%' : this.image.style.height = '100%'
                        break
                    default:
                        this.image.style.width = '100%'
                        this.image.style.height = '100%'
                }
                /**
                 * 图片加载完成时触发
                 * @event load
                 */
                this.$emit('load')
            },
            lazyLoadImage(){
                this.scrollTop = getWindowScrollTop()
                this.bodyHeight = getClientHeight()
                this.imageTop = getOffsetTop(this.$refs.imageParentRef)
                //this.scrollTop + this.bodyHeight + this.bodyHeight/2 >= this.imageTop
                if(this.scrollTop + this.bodyHeight >= this.imageTop){
                    this.loadImage()
                }
            },
            loadImage(){
                try{
                    let img = new Image()
                    img.src = this.src

                    if(img.complete){
                        this.handleLoadSuccess(img)
                        return
                    }
                    img.onload = ()=>{
                        img.onload = null
                        this.handleLoadSuccess(img)
                    }
                }catch(err){
                    this.$emit('load',err)
                }
            }
        },
        watch: {
            src(){
                this.lazy ? this.lazyLoadImage() : this.loadImage()
            }
        },
        created(){
            if(this.defaultSrc){
                this.defaultImg = new Image()
                this.defaultImg.src = this.defaultSrc
            }
            new Logger('Image')
        },
        mounted(){
            this.lazy && window.addEventListener('scroll', this.handleScroll)
            if(this.defaultImg && !this.defaultImg.complete){ //占位后计算图片位置
                this.defaultImg.onload = ()=>{
                    this.lazy ? this.lazyLoadImage() : this.loadImage()
                }
                return
            }
            this.lazy ? this.lazyLoadImage() : this.loadImage()
        },
        destroyed(){
            window.removeEventListener('scroll', this.handleScroll)
        },
        props: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'image'
             * */
            classPrefix: {
                type: String,
                default: 'image'
            },
            /**
             * 默认图片地址
             * @property defaultSrc
             * @type String
             * @default null
             * */
            defaultSrc: String,
            /**
             * 图片地址
             * @property src
             * @type String
             * @default
             * */
            src: String,
            /**
             * 图像无法显示时的替代文本
             * @property alt
             * @type String
             * @default
             * */
            alt: String,
            /**
             * 图片大小，[default, cover, contain]
             * @property phSize
             * @type String
             * @default 'default'
             * */
            phSize: {
                type: String,
                default: 'default'
            },
            /**
             * 是否懒加载
             * @property lazy
             * @type Boolean
             * @default false
             * */
            lazy: {
                type: Boolean,
                default: false
            }
        }
    }
</script>