<script>
    const demos = [
        {
            title: '原图',
            code: '<img :src="url" />',
            options: {
                data(){
                    return {
                        url: 'https://www.dpfile.com/sc/ares_pics/f6f4d77d040d9a0ab77e94059d1772c8.png'
                    }
                }
            }
        },
        {
            title: '默认状态',
            code: '<div class="image-demo"><sw-image :src="url" /></div>',
            options: {
                data(){
                    return {
                        url: 'https://www.dpfile.com/sc/ares_pics/f6f4d77d040d9a0ab77e94059d1772c8.png'
                    }
                }
            }
        },
        {
            title: '长边100%，不变形，留有空白区',
            desc: 'phSize: cover',
            code: '<div class="image-demo"><sw-image :src="url" phSize="cover" /></div>',
            options: {
                data(){
                    return {
                        url: 'https://www.dpfile.com/sc/ares_pics/f6f4d77d040d9a0ab77e94059d1772c8.png'
                    }
                }
            }
        },
        {
            title: '短边100%，不变形',
            desc: 'phSize: contain',
            code: '<div class="image-demo"><sw-image :src="url" phSize="contain" /></div>',
            options: {
                data(){
                    return {
                        url: 'https://www.dpfile.com/sc/ares_pics/f6f4d77d040d9a0ab77e94059d1772c8.png'
                    }
                }
            }
        },
        {
            title: '懒加载',
            desc: '属性：lazy，进入可视范围才加载。批量懒加载时一定要有占位图，即设置defaultSrc属性',
            code: `
                    <div class="image-demo">
                       <sw-image :src="url" phSize="contain" lazy/>
                    </div>
            `,
            options: {
                data(){
                    return {
                        url: 'http://p1.meituan.net/activityback/f3ea984898f4c6db83b40032abdb95b0839353.png'
                    }
                }
            }
        }
    ]
    import Base from '../base.vue'
    export default {
        name: 'Image',
        extends:Base,
        data(){
            return {
                demos: demos
            }
        }
    }
</script>

<style lang="less">
    .image-demo .ph-image{
        width: 4rem;
        height:4rem;
        background-color: #eee;
    }
</style>