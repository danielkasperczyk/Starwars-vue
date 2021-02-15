<template>
  <v-app>
      <Header />
    <v-main class="pa-0">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header';


export default {
  name: 'App',

  components: {
    Header,

  },
};
</script>
