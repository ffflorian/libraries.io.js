import {URL} from 'url';

export type SortType =
  | 'contributions_count'
  | 'created_at'
  | 'dependent_repos_count'
  | 'dependents_count'
  | 'latest_release_published_at'
  | 'rank'
  | 'stars';

export interface FilterOptions {
  keywords?: string[];
  languages?: string[];
  licenses?: string[];
  platforms?: string[];
}

export interface ClientOptions {
  apiKey: string;
  apiUrl?: string | URL;
}

export interface PreReleaseOptions {
  includePreRelease?: boolean;
}

export interface PageOptions {
  page?: number;
  perPage?: number;
}

export interface SearchOptions extends PageOptions {
  sortBy?: SortType;
  filter?: FilterOptions;
}

export interface RequestOptions extends SearchOptions, PreReleaseOptions {
  apiKey?: string;
  platform?: string;
  query?: string;
}
