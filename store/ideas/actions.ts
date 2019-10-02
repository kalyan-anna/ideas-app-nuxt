import { IdeasActions } from './types';

export const actions: IdeasActions = {
  loadAll: async ({ commit }) => {
    commit('loadAll', []);
  },

  register: ({ commit }, idea) => {
    commit('register', idea);
  }
};

export default actions;
