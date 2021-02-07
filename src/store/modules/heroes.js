import axios from 'axios';

const heroes = {
    state: () => ({
        heroes:     []
    }),
    
    mutations: () => ({
        setHeroes(state, payload){
            state.heroes = payload;
        }
    }),
    
    actions: () => ({
        async fetchHeroes({ comit },state, payload){
            const data = await axios.get(`https://swapi.dev/api/people/?search=${payload}`)
            comit.setHeroes(data);
        }
    })
}

export default heroes;
