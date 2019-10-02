import { IdeasActions } from './types';
import { registerIdea } from '@/api/idea.api';

export const actions: IdeasActions = {
  loadAll: async ({ commit }) => {
    commit('loadAll', []);
  },

  register: async ({ commit }, idea) => {
    const savedIdea = await registerIdea(idea);
    commit('register', savedIdea);
  }
};

export default actions;
