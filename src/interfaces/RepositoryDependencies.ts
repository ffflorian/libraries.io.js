import {Repository} from './Repository';
import {ProjectDependency} from './ProjectDependency';

export interface RepositoryDependencies extends Repository {
  dependencies: ProjectDependency[];
}
