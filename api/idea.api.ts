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

export const loadAll = async (): Promise<Idea[]> => {
  const ideas: Idea[] = [];
  await axios
    .get('https://idea-app-ed487.firebaseio.com/ideas.json')
    .then(res => {
      for (const key in res.data) {
        ideas.push({ ...res.data[key], id: key });
      }
    });
  return ideas;
};
