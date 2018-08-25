import {Platform, Project, User, Repository} from '../api/';

export interface API {
  platform: Platform;
  project: Project;
  user: User;
  repository: Repository;
}
