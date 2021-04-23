<template>
    <nav class="w-full text-left bg-gradient-to-r 
    from-blue-800 to-blue-600 text-white
    p-4 "> 
        <router-link class="mx-2" to="/">HOME</router-link>
        <router-link v-for="item in list" 
            :key="item.to" 
            class="mx-2 " 
            :to="item.to">
            {{item.title}}
        </router-link> 
        <button class="mx-2" @click="$emit('open-login-modal')">Login</button>
    </nav>


</template>

<script>
export default {
    data(){
        return{
            list:[
                {title: "DC Heroes", to:"/heroes"},
                {title: "Calendar", to:"/calendar"},
                {title: "Markdown", to:"/markdown"},
                {title: "Carousel", to:"/slider"}
            ]
        }
    }
    
}
</script>

<style>

</style>