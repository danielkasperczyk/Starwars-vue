<template>
  <v-container class="d-flex flex-column pa-0">
    <div v-if="!!filteredHeroes(selected).length">
      <div class="d-flex justify-center">
        <v-select v-model="selected" :items="filter" class="flex-sm-grow-0" />
      </div>
      <v-list max-width="600" width="100%" class="ma-auto">
        <v-list-item-group>
          <v-list-item
            v-for="(hero, index) in filteredHeroes(selected)"
            :key="index"
            :to="{ name: 'hero', params: { heroId: hero.name, heroData: hero } }"
          >
            <v-list-item-content>
              <v-list-item-title class="text-center" v-text="hero.name" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>
    <p v-else class="text-center">{{ error }}</p>
  </v-container>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'List',
  data() {
    return {
      filter: ['All', 'Male', 'Female', 'Unknown'],
      selected: 'All',
    };
  },
  computed: {
    ...mapGetters(['filteredHeroes']),
    ...mapState(['error']),
  },
};
</script>
