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
export default {
  computed:{
    heroesCount(){
      return this.dcHeroes.length;
    },

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
  methods:{
    addHero(){
      if(this.newHero){
        this.dcHeroes.push({name: this.newHero});
        this.newHero = "";
      }
    },
    removeHero(index){
      this.dcHeroes =  this.dcHeroes.filter((hero, i)  => i != index);
       
    },
    // setFullName(){
    //   this.fullname = 'Ericson Muros'
    // }
  },
  data(){
    return{
      isDisabled: true,
      newHero: "",
      fname: "Hello",
      lname: "World",
      dcHeroes:[  
        {name: "Super Girl"},
        {name: "Flash"},
        {name: "Batman"},
        {name: "Arrow"},
        {name: "SuperMan"},
      ],
      
    }
  },
}
 
</script>
