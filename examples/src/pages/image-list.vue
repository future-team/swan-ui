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
                    '//fuss10.elemecdn.com/1/9e/33bc92ada7a5c4091d6e7068dd064jpeg.jpeg?imageMogr2/thumbnail/200x200/format/webp/quality/85',
                    'http://p0.meituan.net/210.0/wmproduct/a83cec40933f2d9999e10b6f60b9f0d432242.jpg',
                    'http://p1.meituan.net/210.0/wmproduct/77a87ea819abb65648899cd9140f07f2198746.jpg',
                    'http://p0.meituan.net/210.0/wmproduct/6e4ad290e99ef6dd9a036c3e7f2aea39198883.jpg',
                    'http://p0.meituan.net/210.0/wmproduct/0434e6204956b75f6f547b676f1970a2168767.jpg',
                    'http://p0.meituan.net/210.0/wmproduct/9c21f6110e53bc6d2472ae2f15c9e5ad165630.jpg',
                    'http://p0.meituan.net/210.0/wmproduct/73bd7e3b95dc6e0bcd8b4ee59f64f141993201.jpg',
                    'http://p1.meituan.net/210.0/wmproduct/fa6293a3b5779ccf808edf4906dd6a9a165540.jpg',
                    'http://p0.meituan.net/210.0/wmproduct/53f5e4044a357bcfefeacdd6b5edf7f3194041.jpg',
                    'http://p1.meituan.net/210.0/wmproduct/5947ea5c8bc2dc369eb9bdbd0e83fafc123031.jpg',
                    'http://p0.meituan.net/210.0/wmproduct/199cf17f59fdc8415a49416c9e881a2f146536.jpg',
                    'http://p0.meituan.net/210.0/wmproduct/d1fcf3e9b408374b4baea306a2fcfaef305793.jpg',
                    'http://p0.meituan.net/210.0/wmproduct/4584d0f6301a2418a002d61b3b8da209122599.jpg',
                    'http://p0.meituan.net/210.0/wmproduct/dc7627e27aed9ef6382c12113bd3fc83116583.jpg',
                    'http://p1.meituan.net/210.0/wmproduct/50975a4ed62868f18897a92dc72815dc73388.jpg',
                    'http://p0.meituan.net/210.0/wmproduct/14decc37c1b8cae6e8dfa3b5eb8438a877633.jpg',
                    'http://p1.meituan.net/210.0/wmproduct/e18162ad2832480f32e61a61c74dd213128990.jpg',
                    'http://p0.meituan.net/210.0/wmproduct/734723448ff2921b6573a7b8e7b6c604157780.jpg',
                    'http://p1.meituan.net/210.0/wmproduct/b971be82761db4f7d9e288a742ccc868218620.jpg',
                    'http://p1.meituan.net/210.0/wmproduct/da36086f18a632608567d7c619761001131891.jpg',
                    'http://p1.meituan.net/210.0/wmproduct/c6f36527d7406091276a7f0f9fef24fe80091.jpg'
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