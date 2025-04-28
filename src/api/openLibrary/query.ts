import axios from 'axios';
import type { AxiosResponse } from 'axios';

import type { SearchPaginatedResponse, SearchQueryRequest } from './models';
import { API_PATH } from './path';

export async function search(q: SearchQueryRequest) {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  return axios.get<any, AxiosResponse<SearchPaginatedResponse, any>>(
    API_PATH.search,
    {
      params: {
        ...q,
        fields: 'key,cover_i,language,author_name,title',
      },
    },
  );
}
