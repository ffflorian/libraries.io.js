export interface RequestParameters {
  [key: string]: string | boolean | number;
}

export type SortParameter =
  | 'contributions_count'
  | 'created_at'
  | 'dependent_repos_count'
  | 'dependents_count'
  | 'latest_release_published_at'
  | 'rank'
  | 'stars';

export interface SearchParameters {
  keywords?: string[];
  languages?: string[];
  licenses?: string[];
  platforms?: string[];
}
