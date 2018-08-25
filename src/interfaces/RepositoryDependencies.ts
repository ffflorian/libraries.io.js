import {Repository} from './Repository';
import {ProjectDependency} from './ProjectDependency';

export interface RepositoryWithDependencies extends Repository {
  dependencies: ProjectDependency[];
}
