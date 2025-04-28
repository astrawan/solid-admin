export type SearchSort =
  | 'editions'
  | 'old'
  | 'new'
  | 'rating'
  | 'rating asc'
  | 'rating desc'
  | 'readinglog'
  | 'want_to_read'
  | 'currently_reading'
  | 'already_read'
  | 'title'
  | 'scans'
  | 'lcc_sort'
  | 'lcc_sort asc'
  | 'lcc_sort desc'
  | 'ddc_sort'
  | 'ddc_sort asc'
  | 'ddc_sort desc'
  | 'ebook_access'
  | 'ebook_access asc'
  | 'ebook_access desc'
  | 'key'
  | 'key asc'
  | 'key desc'
  | 'random'
  | 'random asc'
  | 'random desc'
  | 'random.hourly'
  | 'random.daily';

export interface SearchQueryRequest {
  q: string;
  sort?: SearchSort;
  lang?: string;
  offset?: number;
  page?: number;
  limit?: number;
}

export interface SearchDocument {
  author_name?: string[];
  cover_i: number;
  key: string;
  language?: string[];
  title: string;
}

export interface SearchPaginatedResponse {
  numFound: number;
  start: number;
  numFoundExact: boolean;
  num_found: number;
  documentation_url: string;
  q: string;
  offset: number;
  docs: SearchDocument[];
}
