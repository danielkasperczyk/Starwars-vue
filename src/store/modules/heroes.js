import axios from 'axios';

export default {
    state:{
        heroes: []
    },
    getters: {
        returnHero(state){
            if(state.heroes.length > 0) {
                return state.heroes;
            }
        }
    },
    mutations: {
        setHeroes(state, payload){
            state.heroes = payload;
        }
    },
    
    actions: {
        async fetchHeroes(context, text){
            const response = await axios.get(`https://swapi.dev/api/people/?search=${text}`)
            const data = await response.data.results;
            const endData = data.length > 0 ? data : "Hero not found";
            context.commit("setHeroes", endData);
        }
    }
}


