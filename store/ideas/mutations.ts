import { IdeasMutations } from './types';

export const mutations: IdeasMutations = {
  loadAll: (state, ideas) => {},

  register: (state, idea) => {
    state[idea.id] = idea;
  }
};

export default mutations;
