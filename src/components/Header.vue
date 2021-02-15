<template>
    <v-app-bar class="flex">
      <v-app-bar-title>
        <div class="d-flex flex-column align-center">
          <p class="ma-0 title">Starwars</p>
          <p class="ma-0 subtitle-1" >Searcher</p>
        </div>
      </v-app-bar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header'

}
</script>
<style scoped>
  .flex{
    flex: 0;
  }
</style>