import {PlatformAPI, ProjectAPI, UserAPI, RepositoryAPI} from '../api/';

export interface LibrariesIOAPI {
  platform: PlatformAPI;
  project: ProjectAPI;
  user: UserAPI;
  repository: RepositoryAPI;
}
