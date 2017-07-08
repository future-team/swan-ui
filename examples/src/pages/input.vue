<template>
    <div>
        <sw-input type="text" value="www" placeholder="text" phIcon="search"/>
        <sw-input type="password" value="www"  placeholder="password" visible/>
        <sw-input type="text" :value="myText" @input="handleInputText" placeholder="password" clear/>
        <sw-input type="number" :value="errorValue"  @input="handleInput" placeholder="password" :error="isError"/>
    </div>
</template>

<script>
    export default {
        name: 'Input',
        data: function () {
            return {
                myText: '',
                isError: false,
                errorValue: ''
            }
        },
        methods: {
            handleInput(value){
                if(value > 200){
                    this.isError = true
                }else{
                    this.isError = false
                }
            },
            handleInputText(value){
                this.myText = value
            }
        }
    }
</script>
