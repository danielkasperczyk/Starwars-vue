<template>
    <div class="d-flex justify-center">
        <v-form 
            class="d-flex align-center"
            @submit.prevent="submit">
                <v-text-field 
                    v-model="text"
                    placeholder="Find your hero"
                    autocomplete="off"/>
                <v-btn class="ml-5" type="submit">Search</v-btn>
        </v-form>
    </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
    name: 'Form',
    data: () => ({
        text: '',
    }),
    methods: {
        ...mapActions([
            'fetchHeroes'
        ]),

        submit(){
            if(this.text.length > 0) {
                this.$store.dispatch("fetchHeroes", this.text);
                this.text = '';
                console.log(this.$store)
            }
        }
    }
}
</script>
<style>
    
</style>