import {Repository} from 'interfaces/Repository';
import {ProjectDependency} from 'interfaces/ProjectDependency';

export interface RepositoryWithDependencies extends Repository {
  dependencies: ProjectDependency[];
}
