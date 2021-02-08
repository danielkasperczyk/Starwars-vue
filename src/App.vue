<template>
  <v-app>
    <Header />
    <v-main class="pa-0">
      <Home />
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header';
import Home from './components/Home';

export default {
  name: 'App',

  components: {
    Header,
    Home
  },
};
</script>
