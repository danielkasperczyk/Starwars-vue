<template>
    <div class="d-flex justify-center flex-wrap">
        <v-form 
            ref="form"
            v-model="valid"
            class="d-flex align-center"
            @submit.prevent="submit">
                <v-text-field 
                    v-model="text"
                    :rules="rules"
                    autocomplete="off"
                    label="Find your hero"
                    required/>
                <v-btn                     
                    class="ml-5" 
                    type="submit"
                    :disabled="!valid"
                    @click="validate"
                    >Search</v-btn>
        </v-form>
            
    </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
    name: 'Form',
    data: () => ({
        text: '',
        rules: [
            value => !!value || 'Hero is required',
        ],
        valid: false
    }),
    methods: {
        ...mapActions([
            'fetchHeroes'
        ]),
        submit(){
                this.fetchHeroes(this.text);
        },
        validate(){
            this.$refs.form.validate();
        }
    }
}
</script>
<style>
    
</style>