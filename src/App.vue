<template>
  <AppHeader @open-login-modal="isLoginOpen = true"/>
  <div class="w-full flex">
    <router-view/>
  </div>
  <Login @close-login="isLoginOpen=false" v-if="isLoginOpen"/>
</template>

<script>
import AppHeader from "./components/AppHeader"
import Login from "./components/LoginModal"
export default {
  components:{
    AppHeader,
    Login
  },
  
  data(){
    return{
      isLoginOpen: false
    }
  },

  methods: {
  },

  
}
</script>

<style>
#app {
  font-family: Avenir, H elvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
} */

/* #nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
