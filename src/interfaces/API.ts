import {GitHubAPI, PlatformAPI, ProjectAPI, UserAPI} from '../api/';

export interface API {
  github: GitHubAPI;
  platform: PlatformAPI;
  project: ProjectAPI;
  user: UserAPI;
}
