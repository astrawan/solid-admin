import { stringJoin } from '#ui/utils';

const ROOT_API = 'https://openlibrary.org';
const ROOT_SEARCH = '/search.json';

export const API_PATH = {
  root: ROOT_API,
  search: stringJoin(ROOT_API, ROOT_SEARCH),
};
