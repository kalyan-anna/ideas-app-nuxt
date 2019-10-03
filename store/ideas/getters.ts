import { IdeasGetters } from './types';

export const getters: IdeasGetters = {
  getIdeas: state => {
    console.log('getter...', state.ideas);
    return Object.values(state.ideas);
  }
};

export default getters;
