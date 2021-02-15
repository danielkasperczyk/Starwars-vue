<template>
    <v-container class="d-flex flex-column">
        <v-select
            v-show="Array.isArray(findedHeroes)"
            :items=filter
            :value=filter[0]
            class="align-self-end"
            @change="filterHeroes">
        </v-select>
        <v-list 
            v-if="this.heroes"
            max-width="600"
            width="100%"
            class="ma-auto">
            <v-list-item-group>
                <v-list-item
                    v-for="(hero,index) in this.heroes"
                    :key="index"
                    :gender="hero.gender"
                    :to="{name: 'hero', params:{heroId: hero.name, heroData: hero}}">
                        <v-list-item-content>
                           
                                <v-list-item-title 
                                    v-text="hero.name"
                                    class="text-center"/>
                                
                        </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
        <p v-else class="text-center" v-text="findedHeroes"></p>
    </v-container>
</template>

<script>
export default {
    name: 'List',
    data(){
        return{
            filter: ['All', 'Male', 'Female', 'Unknown'],
            heroes: []
        }
    },
    computed: {
        findedHeroes(){
            return this.$store.getters.returnHero
        }
    },
    methods: {
        filterHeroes(gender){
            const heroes = this.$store.getters.returnHero;
            if(gender === "All"){
                this.heroes = heroes;
                console.log(this.heroes);
            }
            else{
                this.heroes = heroes.filter(hero => hero.gender.toUpperCase() === gender.toUpperCase());
                console.log(this.heroes);
            }
        }
    }
}
</script>

<style>

</style>