import {Project, User, Repository} from '../api/';
import * as Interfaces from '../interfaces/';

export interface API {
  project: Project;
  user: User;
  repository: Repository;
  getPlatforms: () => Promise<Interfaces.Platform>;
  getProject: (platform: string, name: string) => Promise<Interfaces.Project>;
}
