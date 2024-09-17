<template>
  <div id="app">
    <div class="column is-half is-offset-one-quarter">
      <h1 class="title is-1">Pokedex</h1>
      <hr />
      <input type="text" placeholder="buscar pokemon pelo nome" v-model="search" class="input is-rounded"/>
      <button class="button is-fullwidth is-success" id="buscaBtn" @click="buscar">Buscar</button>
      <div v-for="(poke, index) in filteredPokemons" :key="poke.url">
        <Pokemon :name="poke.name" :url="poke.url" :num="index + 1"/>
      </div>      
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Pokemon from './components/Pokemon.vue';

export default {
  name: 'App',
  data() {
    return {
      pokemons: [],
      filteredPokemons: [],
      search: ''
    }
  },
  created: function(){
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
      .then(response => {
        // console.log(response.data.results);
        this.pokemons = response.data.results;
        this.filteredPokemons = response.data.results;
        // console.log(this.pokemon);
      })
      .catch(error => {
        console.log(error);
      });
  },
  components: {
    Pokemon
  },
  methods: {
    buscar: function(){
      this.filteredPokemons = this.pokemons;
      if(this.search === '' || this.search === ' '){
        this.filteredPokemons = this.pokemons;
      }else{
        this.filteredPokemons =  this.pokemons.filter(pokemon => pokemon.name === this.search);
      }
    }
  },
  computed: {
    // resultadoBusca: function(){
    //   if(this.search === '' || this.search === ' '){
    //     return this.pokemons;
    //   }else{
    //     return this.pokemons.filter(pokemon => {
    //       return pokemon.name.includes(this.search.toLowerCase());
    //     });
    //   }
    // }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#buscaBtn {
  margin-top: 10px;
}
</style>
