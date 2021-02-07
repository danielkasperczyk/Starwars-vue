<template>
  <v-app>
    <Header />
    <v-main>
      <Form @submited="searchCharacter"/>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';
import Header from './components/Header';
import Form from './components/Form';

export default {
  name: 'App',

  components: {
    Header,
    Form
  },

  data: () => ({
    text: '',
    characters: []
  }),

  methods:{
    ...mapActions([
      'fetchHeroes'
    ]),
    searchCharacter(text){
      this.$store.dispatch('fetchHeroes', text);
    },
  }
};
</script>
