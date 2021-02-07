<template>
    <div class="d-flex justify-center">
        <v-form 
            class="d-flex align-center"
            @submit.prevent="submit">
                <v-text-field 
                    v-model="text"
                    autocomplete="off"/>
                <v-btn class="ml-5" type="submit">Search</v-btn>
        </v-form>
    </div>
</template>
<script>
export default {
    name: 'Form',
    data: () => ({
        text: '',
    }),
    emits: ['submited'],
    methods: {
        submit(){
            if(this.text.length > 0) {
                this.$emit('submited', this.text);
                
                this.text = '';
            }
        }
    }
}
</script>
<style>
    
</style>