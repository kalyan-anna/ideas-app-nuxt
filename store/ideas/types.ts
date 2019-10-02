import { Idea } from '~/models/idea';
import { RootState } from '../types';
import { ActionTree, ActionContext, MutationTree, GetterTree } from 'vuex';

export interface IdeasState {
  [key: string]: Idea;
}

export type IdeaActionContext = ActionContext<IdeasState, RootState>;

export interface IdeasActions extends ActionTree<IdeasState, RootState> {
  loadAll: (ctx: IdeaActionContext) => void;
  register: (ctx: IdeaActionContext, idea: Idea) => void;
}

export interface IdeasMutations extends MutationTree<IdeasState> {
  loadAll: (state: IdeasState, ideas: Idea[]) => void;
  register: (state: IdeasState, idea: Idea) => void;
}

export type IdeasGetters = GetterTree<IdeasState, RootState>;
