import { IdeasMutations } from './types';
import { Idea } from '~/models/idea';

export const mutations: IdeasMutations = {
  loadAll: (state, ideas: Idea[]) => {
    ideas.forEach(idea => {
      state.ideas[idea.id] = idea;
    });
  },

  register: (state, idea) => {
    state.ideas[idea.id] = idea;
  }
};

export default mutations;
