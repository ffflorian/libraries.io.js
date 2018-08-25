import {PlatformAPI, ProjectAPI, UserAPI, RepositoryAPI} from '../api';

export interface API {
  platform: PlatformAPI;
  project: ProjectAPI;
  user: UserAPI;
  repository: RepositoryAPI;
}
