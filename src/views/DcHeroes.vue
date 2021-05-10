<template>
    <div class="m-auto">
        <h1 class="text-2xl text-center">DC Heroes {{heroesCount}}</h1>
        <!-- <h2>{{fullname}}</h2> <h3>{{fname}} {{lname}}</h3> -->
        <ul>
        <li
            class="flex justify-between" 
            v-for="(hero,key) in dcHeroes"
            :key="hero.name" 
        > 
        <div> 
            {{hero.name}} 
        </div>
        
        <button v-on:click="removeHero(key)">
            X
        </button>
            
        </li>
        </ul>

        <form class="mt-10"
        @submit.prevent="addHero()"
        >
        <input class="border rounded"
            v-model="newHero" 
            placeholder="Type Hero Name Here"
            ref="newHeroRef"
        />

        <button class="ml-5 p-2 border rounded bg-gradient-to-r from-red-700 to-pink-500 text-white"
            type="submit">
            Add Hero
        </button>

        </form>
        <!-- <button @click="setFullName">Set Full Name</button> -->
    </div>
</template>

<script>
import {computed, onMounted, ref} from "vue";
export default {
  setup(){
    onMounted(() =>{
      newHeroRef.value.focus();
    })

    const heroesCount = computed({
      get: () => dcHeroes.value.length,
    })
    const newHeroRef = ref();
    const newHero = ref("");
    const dcHeroes = ref([  
      {name: "Super Girl"},
      {name: "Flash"},
      {name: "Batman"},
      {name: "Arrow"},
      {name: "SuperMan"},
    ]);

    function removeHero(index){
      dcHeroes.value =  dcHeroes.value.filter((hero, i)  => i != index);
    }

    function addHero(){
      if(newHero.value){
        dcHeroes.value.push({name: newHero.value});
        newHero.value = "";
      }
    }

    return {
      newHero,
      dcHeroes,
      removeHero,
      addHero,
      newHeroRef,
      heroesCount
    }
  },
  data(){
    return{
      isDisabled: true,
      
      fname: "Hello",
      lname: "World",
      
      
    }
  },

  computed:{
    // heroesCount(){
    //   return this.dcHeroes.length;
    // },

    // fullname:{
    //     get(){
    //       return `Full name is ${this.fname} ${this.lname}`;  
    //     },
    //     set(fullname){
    //       const values = fullname.split(" ");
    //       this.fname = values[0];
    //       this.lname = values[1];
    //     }
    // },
  },
  // methods:{
   
  //   // setFullName(){
  //   //   this.fullname = 'Ericson Muros'
  //   // }
  // },
  
}
 
</script>
