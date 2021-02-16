<template>
    <v-container 
        class="d-flex flex-column pa-0">
        <v-select
            v-model="selected"
            v-show="Array.isArray(findedHeroes)"
            :items=filter
            class="align-self-center">
        </v-select>
        <v-list 
            v-if="Array.isArray(findedHeroes)"
            max-width="600"
            width="100%"
            class="ma-auto">
            <v-list-item-group>
                <v-list-item
                    v-for="(hero,index) in filterHeroes"
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
        <p 
            v-else 
            class="text-center" 
            v-text="findedHeroes"></p>
    </v-container>
</template>

<script>
export default {
    name: 'List',
    data(){
        return{
            filter: ['All', 'Male', 'Female', 'Unknown'],
            selected: 'All'
        }
    },
    computed: {
        findedHeroes(){
            return this.$store.getters.returnHero
        },
        filterHeroes(){
            return this.$store.getters.filteredHeroes(this.selected)
        }
    },
}
</script>

<style>

</style>