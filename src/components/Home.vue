<template>
    <v-main class="flex-column justify-center">
        <Form />
        <List />
    </v-main>
</template>

<script>
import Form from './Form';
import List from './List';

export default {

    name: 'Home',
    components: {
        Form,
        List
    },
}
</script>

<style>

</style>