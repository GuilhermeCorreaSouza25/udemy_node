<template>
    <div id="pokemon">
        <div class="card">
            <div class="card-image">
                <figure>
                    <img :src="currentImg" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">{{ num }} - {{ capitalize(name) }}</p>
                        <p class="subtitle is-6">{{ pokemon.type }}</p>
                    </div>
                </div>
                <div class="content">
                    <button class="button is-medium is-fullwidth" @click="changeSprite">Mudar sprite</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    created:function(){
        axios.get(this.url)
            .then(response => {
                this.pokemon.type = response.data.types[0].type.name;
                this.pokemon.front = response.data.sprites.front_default;
                this.pokemon.back = response.data.sprites.back_default;
                this.currentImg = this.pokemon.front;
                // console.log(response.data);
                console.log(this.pokemon)
            })
            .catch(error => {
                console.log(error);
            });
    },
    data(){
        return {
            isFront: true,
            currentImg: '',
            pokemon: {
                type: '',
                front: '',
                back: ''
                
            }
        }
    },
    name: 'PokemonCard',
    props: {
        num: Number,
        name: String,
        url: String
    },
    methods: {
        capitalize(value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        },
        changeSprite() {
            if(this.isFront){
                this.isFront = false;
                this.currentImg = this.pokemon.back;
            }else{
                this.isFront = true;
                this.currentImg = this.pokemon.front;
            }
        }
    }

}
</script>

<style scoped>
#pokemon {
    margin-top: 20px;
}
</style>