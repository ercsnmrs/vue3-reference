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
        <button class="mx-2" 
            v-if="isLoggedIn" 
            @click="logout
        ">Logout
        </button>
        <button class="mx-2" 
            v-else 
            @click="$emit('open-login-modal')
        ">Login
        </button>
    </nav>
</template>

<script>
import firebase from '../utilities/firebase'

export default {
    props:{
         isLoggedIn: {type: Boolean, required:true },
    },
    data(){
        return{
            list:[
                {title: "DC Heroes", to:"/heroes"},
                {title: "Calendar", to:"/calendar"},
                {title: "Markdown", to:"/markdown"},
                {title: "Carousel", to:"/slider"}
            ]
        }
    },methods: {
        logout(){
            firebase.auth().signOut()
            // .then(res => {})
            // .catch(e => {});
        }
    },
    
}
</script>

<style>

</style>