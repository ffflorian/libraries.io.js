import {ProjectDependency} from './ProjectDependency';
import {Project} from './Project';

export interface ProjectWithDependencies extends Project {
  dependencies_for_version: string;
  dependencies: ProjectDependency[];
  dependent_repos_count: number;
  dependents_count: number;
}
