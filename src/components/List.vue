<template>
    <v-container>
        <v-list v-if="Array.isArray(findedHeroes) ">
            <v-list-item-group>
                <v-list-item
                    v-for="(hero,index ) in findedHeroes"
                    :key="index">
                        <v-list-item-content>
                            <v-list-item-title 
                                v-text="hero.name"
                                class="text-center"/>
                        </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
        <h3 v-else class="text-center" v-text="findedHeroes"></h3>
    </v-container>
</template>

<script>
export default {
    name: 'List',

    computed: {
        findedHeroes(){
            return this.$store.getters.returnHero;
        }
    }
}
</script>

<style>

</style>