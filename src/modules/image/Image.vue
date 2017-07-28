<template>
    <div ref="imageParentRef" :class="classObject">
        <img ref="imageRef" :src="currentSrc"  :alt="alt"/>
    </div>
</template>

<script>
    /**
     * 图片组件<br/>
     * - 和普通图片使用方式一致，src为必填选项，可自行添加alt属性。
     * - 可通过defaultSrc添加默认图片地址，在图片未加载出来之前显示。
     * - 可通过phSize设置图片大小，default为宽高和父级一致；cover为覆盖，不变形，没有空白区域；contain包含，不变形，可能有空白区域。
     * - 可通过lazy设置图片为懒加载的模式，当图片进入视口之后才开始加载，可配合ImageList使用。
     * - cover和contain必须设置定高。
     *
     * 属性：
     * - src: 图片地址。<br/>
     * - defaultSrc: 默认图片地址。<br/>
     * - phSize: 图片大小。<br/>
     * - lazy: 是否懒加载<br/>
     *
     * 事件：
     * - load: 图片加载完成时触发
     *
     * @class Image
     * @module 基础组件
     * @extends Component
     * @constructor
     * @since 0.0.1
     * @demo image|image.js {展示}
     * @show true
     * */
    import SwBase from '../Base.vue'
    import { getClientHeight,getOffsetTop ,getWindowScrollTop} from '../../utils/tool.js'
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
                this.$emit('load')
            },
            lazyLoadImage(){
                this.scrollTop = getWindowScrollTop()
                this.bodyHeight = getClientHeight()
                this.imageTop = getOffsetTop(this.$refs.imageParentRef)
                //this.scrollTop + this.bodyHeight + this.bodyHeight/2 >= this.imageTop
                if(!this.load && (this.scrollTop + this.bodyHeight >= this.imageTop)){
                    this.loadImage()
                }
            },
            loadImage(){
                try{
                    let img = new Image()
                    img.src = this.src
                    this.load = true

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
        created(){
            if(this.defaultSrc){
                this.defaultImg = new Image()
                this.defaultImg.src = this.defaultSrc
            }
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