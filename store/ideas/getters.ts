import { IdeasGetters } from './types';

export const getters: IdeasGetters = {
  getIdeas: state => {
    return Object.values(state.ideas);
  }
};

export default getters;
