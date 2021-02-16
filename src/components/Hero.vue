<template>
    <v-container fluid>
        <v-card
            max-width="400"
            class="mx-auto text">
            <v-list-item v-for="(value, index) in this.hero" :key="index">
                <v-list-item-content>
                    <v-list-item-title>{{value === 'n/a' ? 'unknown' : value}}</v-list-item-title>
                    <v-list-item-subtitle>{{index.replace('_', ' ')}}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
    </v-card>
    <v-btn
      class="ma-2"
      outlined
      to="/"
    >
      Back to Home
    </v-btn>
    </v-container>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Hero',
    data(){
        return{
            hero: {}
        }
    },
    props: {
        heroData: {
            type: Object,
            required: true
        }
    },
     async created(){
        const { name, mass, height, hair_color, gender, skin_color, homeworld } = this.heroData;
        const homeworldStr = homeworld.slice(0,4) + 's';
        const homeRes = await axios.get(`${homeworldStr.concat(homeworld.slice(4))}`);
        const world = await homeRes.data.name;
        this.hero = {
            name, 
            gender,
            mass, 
            height, 
            hair_color, 
            skin_color,
            world
        }
    }
}
</script>

<style>

</style>