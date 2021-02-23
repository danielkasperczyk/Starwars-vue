import axios from 'axios';

export default {
  state: {
    heroes: [],
    error: '',
  },

  getters: {
    filteredHeroes: (state) => (gender) => {
      const defaultFilter = (gen) =>
        state.heroes.filter((hero) => hero.gender.toUpperCase() === gen.toUpperCase());
      const genders = {
        All: state.heroes,
        Male: defaultFilter('Male'),
        Female: defaultFilter('Female'),
        Unknown: state.heroes.filter((hero) => hero.gender === 'n/a'),
      };

      return genders[gender];
    },
  },

  mutations: {
    setHeroes(state, payload) {
      state.heroes = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    cleanError(state) {
      state.error = '';
    },
  },

  actions: {
    async fetchHeroes({ commit }, text) {
      commit('cleanError');
      try {
        const {
          data: { results },
        } = await axios.get(`https://swapi.dev/api/people/`, {
          params: {
            search: text,
          },
        });
        commit('setHeroes', results);
      } catch (err) {
        commit('setError', 'Hero not found');
      }
    },
  },
};
