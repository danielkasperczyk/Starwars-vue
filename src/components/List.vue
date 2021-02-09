<template>
    <v-container>
        <v-list 
            v-if="Array.isArray(findedHeroes)"
            max-width="600"
            class="ma-auto">
            <v-list-item-group>
                <v-list-item
                    v-for="(hero,index) in findedHeroes"
                    :key="index"
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

    computed: {
        findedHeroes(){
            return this.$store.getters.returnHero
        }
    }
}
</script>

<style>

</style>