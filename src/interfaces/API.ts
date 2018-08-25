import {PlatformAPI, ProjectAPI, GitHubUserAPI, GitHubAPI} from 'api/';

export interface API {
  github: GitHubAPI;
  platform: PlatformAPI;
  project: ProjectAPI;
  user: GitHubUserAPI;
}
