import { Idea } from '../models/idea';
import axios from 'axios';

export const registerIdea = async (newIdea: Idea): Promise<Idea> => {
  const response = await axios.post(
    'https://idea-app-ed487.firebaseio.com/ideas.json',
    {
      ...newIdea
    }
  );

  return {
    ...newIdea,
    id: response.data.name
  };
};
