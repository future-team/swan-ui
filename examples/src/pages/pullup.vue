<template>
    <div>
        <div class="demo">
            <pre><code v-html="escape2Html(code)" class="language-markup"></code></pre>
        </div>
        <div class="image-list-demo">
            <sw-image-list :column="2">
                <sw-image v-for="(url,index) in currentUrls"
                          :key="index"
                          :src="url"
                          :defaultSrc="defaultSrc"
                          lazy></sw-image>
            </sw-image-list>
        </div>
        <sw-pullup :status="status" @load="handleLoad"></sw-pullup>
    </div>
</template>
<script>
    export default {
        name: 'Pullup',
        data(){
            return {
                status: 0,
                page: 0,
                pageSize: 6,
                currentUrls: this.urls.slice(0,6),
                code: `
                            <sw-pullup :status="status"
                                       :tips="['load more','loading','load success','load error','no more']"
                                       @load="handleLoad"/>`
            }
        },
        methods: {
            handleLoad(){
                let vm = this
                if(this.currentUrls.length === this.urls.length){
                    vm.status = 4
                    return
                }
                vm.status = 1
                setTimeout(()=>{
                    this.page++
                    let data =  vm.urls.slice(vm.page * vm.pageSize,(vm.page+1) * vm.pageSize)
                    if(data.length > 0){
                        vm.currentUrls.push(...data)
                        vm.status = 2
                    }else{
                        vm.status = 4
                    }
                },2000)
            },
            escape2Html(str) {
                let  map={'<':'&lt;','>':'&gt;'}
                return str.replace(/(<|>)/ig,function(all,t){return map[t]})
            }
        },
        updated(){
            console.log(this.currentUrls.length)
        },
        props: {
            defaultSrc: {
                default: 'http://bpic.588ku.com/element_pic/01/47/02/12574338a640011.jpg'
            },
            urls: {
                type: Array,
                default: function () {
                    return [
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
                        '//fuss10.elemecdn.com/0/77/b991c9b98de873e5f0869a9348262jpeg.jpeg?imageMogr2/thumbnail/200x200/format/webp/quality/85',
                        '//fuss10.elemecdn.com/4/59/92ee9d1433343aaee911ec91c8a9ajpeg.jpeg?imageMogr2/thumbnail/200x200/format/webp/quality/85',
                        '//fuss10.elemecdn.com/e/06/fb7e8bae74d12df246e5a6a5c4fe0jpeg.jpeg?imageMogr2/thumbnail/200x200/format/webp/quality/85',
                        '//fuss10.elemecdn.com/b/51/f8a97c36c66bc5f410dec19d6613djpeg.jpeg?imageMogr2/thumbnail/200x200/format/webp/quality/85',
                        '//fuss10.elemecdn.com/8/d4/55b41eb8b6dab9c0537c536725be0jpeg.jpeg?imageMogr2/thumbnail/200x200/format/webp/quality/85',
                        '//fuss10.elemecdn.com/8/2c/a89edb83e4d84b1ad9c68d166691bjpeg.jpeg?imageMogr2/thumbnail/200x200/format/webp/quality/85'
                    ]
                }
            }
        }
    }
</script>

<style lang="less">
    @import "../demo";
</style>
