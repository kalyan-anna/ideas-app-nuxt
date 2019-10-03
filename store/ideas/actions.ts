import { IdeasActions } from './types';
import { registerIdea, loadAll } from '@/api/idea.api';

export const actions: IdeasActions = {
  loadAll: async ({ commit }) => {
    const ideas = await loadAll();
    commit('loadAll', ideas);
  },

  register: async ({ commit }, idea) => {
    const savedIdea = await registerIdea(idea);
    commit('register', savedIdea);
  }
};

export default actions;
