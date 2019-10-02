import { IdeasMutations } from './types';

export const mutations: IdeasMutations = {
  loadAll: (state, ideas) => {
    state.ideas = {};
  },

  register: (state, idea) => {}
};

export default mutations;
