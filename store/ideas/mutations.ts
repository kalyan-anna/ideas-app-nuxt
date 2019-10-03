import { IdeasMutations } from './types';
import { Idea } from '~/models/idea';

export const mutations: IdeasMutations = {
  loadAll: (state, ideas: Idea[]) => {
    const ideaMap: any = {};
    ideas.forEach(idea => {
      ideaMap[idea.id] = idea;
    });
    state.ideas = ideaMap;
  },

  register: (state, idea) => {
    state.ideas = {
      ...state.ideas,
      [idea.id]: idea
    };
  }
};

export default mutations;
