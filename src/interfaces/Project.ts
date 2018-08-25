import {ProjectVersion} from 'interfaces/ProjectVersion';
import {ProjectRelease} from 'interfaces/ProjectRelease';

export interface Project {
  dependent_repos_count: number;
  dependents_count: number;
  description: string | null;
  forks: number;
  homepage: string | null;
  keywords: string[];
  language: string;
  latest_download_url: string;
  latest_release_number: string;
  latest_release_published_at: string;
  latest_stable_release: ProjectRelease;
  name: string;
  normalized_licenses: string[];
  package_manager_url: string;
  platform: string;
  rank: number;
  repository_url: string | null;
  stars: number;
  status: string | null;
  versions: ProjectVersion[];
}
