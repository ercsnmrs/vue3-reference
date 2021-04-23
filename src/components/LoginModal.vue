<template>
        <section 
            class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"
            @click="$emit('close-login')"
        ></section>
        <div class="absolute inset-0">
            <div class="flex h-full">
                <div class="z-30 m-auto bg-white p-2 rounded shadow w-1/3">
                  <div class="p-2 border"> 
                    <h1 class="text-2xl text-left">
                        Login
                    </h1>
                    <form class="p-2 my-2" @submit.prevent="">
                        <div class="my-4">
                            <label class="text-left" for="">Email Or Username</label>
                            <input class="rounded shadow p-2 w-full" 
                            placeholder="Enter Email Or Username"
                            v-model="form.email"
                            type="text" />
                        </div>

                        <div class="my-4">
                            <label class="text-left" for="">Password</label>
                            <input class="rounded shadow p-2 w-full"
                            placeholder="Enter Password"
                            v-model="form.password"
                            type="password" />
                         </div>

                         <div class="my-4">
                            <button class="w-full rounded shadow-md 
                                bg-gradient-to-r from-red-800 to bg-pink-600
                                text-white p-2" 
                                type="submit">
                                Login
                            </button>
                         </div>
                    </form>
                  </div>
                </div>
            </div>  
        </div>
</template>

<script>
import firebase from "../utilities/firebase"
export default {
    data(){
        return{
           form:{
               email:'',
               password:'', 
           }
        }
    },
    methods: {
        submit(){
            firebase.auth().signInWithEmailAndPassword(this.form.email,this.form.password).
            then(res =>{
                console.log(res)
            }).catch(e =>{
                console.log(e)
            })
        }
    }, 
}
</script>

<style>

</style>