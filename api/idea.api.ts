import { Idea } from '../models/idea';

export const registerIdea = async (newIdea: Idea): Promise<Idea> => {
  newIdea.id = '1';
  return new Promise<Idea>(resolve => {
    resolve(newIdea);
  });
};
