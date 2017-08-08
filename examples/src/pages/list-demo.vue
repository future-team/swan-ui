<template>
    <div class="all-list-demo">
        <sw-list>
            <sw-list-header>列表标题</sw-list-header>
            <sw-list-item required>
                <sw-list-col>
                    <sw-input type="text" placeholder="请输入姓名"/>
                </sw-list-col>
            </sw-list-item>
            <sw-list-item>
                <sw-list-col heading>
                    <label>姓名</label>
                </sw-list-col>
                <sw-list-col>
                    <sw-input type="text" value="一键清除" clear/>
                </sw-list-col>
            </sw-list-item>
            <sw-list-item disabled>
                <sw-list-col heading>
                    <label>姓名</label>
                </sw-list-col>
                <sw-list-col>
                    <sw-input type="text" placeholder="请输入" value="disabled"/>
                </sw-list-col>
            </sw-list-item>
            <sw-list-item error>
                <sw-list-col heading>
                    <label>姓名</label>
                </sw-list-col>
                <sw-list-col>
                    <sw-input type="text" placeholder="请输入" value="error" clear error/>
                </sw-list-col>
            </sw-list-item>
            <sw-list-item>
                <sw-list-col heading>
                    <label>密码</label>
                </sw-list-col>
                <sw-list-col>
                    <sw-input type="password" placeholder="请输入" value="123456" clear visible/>
                </sw-list-col>
            </sw-list-item>
            <sw-list-item>
                <sw-list-col heading>
                    <label>兴趣：</label>
                </sw-list-col>
                <sw-list-col>
                    <sw-input type="text" placeholder="请输入"/>
                </sw-list-col>
                <sw-list-col heading>
                    <label>爱好：</label>
                </sw-list-col>
                <sw-list-col>
                    <sw-input type="text" placeholder="请输入"/>
                </sw-list-col>
            </sw-list-item>
        </sw-list>

        <sw-list>
            <sw-list-header>列表标题</sw-list-header>
            <sw-list-item navigate>
                <sw-list-col heading>
                    <label>性别</label>
                </sw-list-col>
                <sw-list-col tail>
                    <sw-input type="text" p
                              placeholder="男/女"
                              @click.native="handleClick"
                              disabled/>
                </sw-list-col>
            </sw-list-item>
            <sw-list-item>
                <sw-list-col heading>
                    <label>性别</label>
                </sw-list-col>
                <sw-list-col tail>
                    <sw-radio label="男" name="sex" />
                    <sw-radio label="女" name="sex" />
                </sw-list-col>
            </sw-list-item>
            <sw-list-item>
                <sw-list-col heading>
                    <label>开关</label>
                </sw-list-col>
                <sw-list-col tail>
                    <sw-switch />
                </sw-list-col>
            </sw-list-item>
        </sw-list>
    </div>
</template>

<script>
    export default {
        name: 'PageList',
        methods: {
            handleClick(){
                window.open('https://cn.vuejs.org/v2/api/#v-on','_blank')
            }
        }
    }
</script>

<style scoped>
    .all-list-demo{
        margin-top: 1rem;
    }
</style>