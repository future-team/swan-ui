<template>
    <div class="image-list-demo">
        <sw-image-list :column="2">
            <dl  v-for="(url,index) in urls"
                 class="ph-image-item"
                 :key="index">
                <dt>
                    <sw-image :src="url"
                              :defaultSrc="defaultSrc"
                              lazy></sw-image>
                </dt>
                <dd>
                    <p class="ph-image-title">图片</p>
                    <p class="ph-image-desp">描述</p>
                </dd>
            </dl>
        </sw-image-list>
    </div>
</template>

<script>
    export default {
        name: 'PageImage',
        data(){
            return {
                defaultSrc: 'http://bpic.588ku.com/element_pic/01/47/02/12574338a640011.jpg',
                urls: [
                    'https://fuss10.elemecdn.com/b/2e/a6c333694efb4db66c6a3ba07e9d8jpeg.jpeg?imageMogr2/thumbnail/200x200/format/webp/quality/85',
                    'https://fuss10.elemecdn.com/e/6c/0de9d18ef47292380826be8d8cfe8jpeg.jpeg?imageMogr2/thumbnail/200x200/format/webp/quality/85',
                    'https://fuss10.elemecdn.com/9/78/f449290a86fb3ca7d793a5cc50344jpeg.jpeg?imageMogr2/thumbnail/200x200/format/webp/quality/85',
                    'https://fuss10.elemecdn.com/b/ce/fdff43a9ea94d46706be48f50bc26jpeg.jpeg?imageMogr2/thumbnail/200x200/format/webp/quality/85',
                    '//fuss10.elemecdn.com/7/00/47f44e82cbcb2fab85c2e779e0395jpeg.jpeg?imageMogr2/thumbnail/200x200/format/webp/quality/85',
                    '//fuss10.elemecdn.com/7/76/7c5da3e863c25a1be7ed725782457jpeg.jpeg?imageMogr2/thumbnail/200x200/format/webp/quality/85',
                    '//fuss10.elemecdn.com/8/76/20666718f4d30ead344a7d0f1c73fjpeg.jpeg?imageMogr2/thumbnail/200x200/format/webp/quality/85',
                    '//fuss10.elemecdn.com/1/47/34baf5c4fc298d36a8ad35c911a61jpeg.jpeg?imageMogr2/thumbnail/200x200/format/webp/quality/85',
                    '//fuss10.elemecdn.com/e/06/fb7e8bae74d12df246e5a6a5c4fe0jpeg.jpeg?imageMogr2/thumbnail/200x200/format/webp/quality/85',
                    '//fuss10.elemecdn.com/1/9e/33bc92ada7a5c4091d6e7068dd064jpeg.jpeg?imageMogr2/thumbnail/200x200/format/webp/quality/85',
                    '//fuss10.elemecdn.com/5/25/0f5048f5ef34c9c44c61d483f5641jpeg.jpeg?imageMogr2/thumbnail/200x200/format/webp/quality/85',
                    '//fuss10.elemecdn.com/9/53/abeb5a938fa50b9a3a686ec81990ajpeg.jpeg?imageMogr2/thumbnail/200x200/format/webp/quality/85',
                    '//fuss10.elemecdn.com/e/48/6923cc3d2705e19d5040058eccb6bjpeg.jpeg?imageMogr2/thumbnail/200x200/format/webp/quality/85',
                    '//fuss10.elemecdn.com/f/60/fb522ee5fe1e3310761229179bcbbjpeg.jpeg?imageMogr2/thumbnail/200x200/format/webp/quality/85',
                    '//fuss10.elemecdn.com/b/b6/d0c51484d77e8c4bc37cf98abe3e0jpeg.jpeg?imageMogr2/thumbnail/200x200/format/webp/quality/85',
                    '//fuss10.elemecdn.com/1/9e/33bc92ada7a5c4091d6e7068dd064jpeg.jpeg?imageMogr2/thumbnail/200x200/format/webp/quality/85'
                ]
            }
        }
    }
</script>

<style lang="less">
    .image-list-demo{
        margin-top: 1rem;
    }
</style>