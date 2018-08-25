import {Endpoint} from '../Endpoint';
import {RequestService} from '../RequestService';
import {Project, ProjectDependencies} from '../interfaces';

export class ProjectAPI {
  constructor(private readonly requestService: RequestService) {}

  public getProject(platform: string, projectName: string): Promise<Project> {
    const endpoint = Endpoint.Project.project(encodeURIComponent(platform), encodeURIComponent(projectName));
    return this.requestService.get(endpoint);
  }

  public getDependencies(
    platform: string,
    projectName: string,
    projectVersion: string
  ): Promise<ProjectDependencies> {
    const endpoint = Endpoint.Project.dependencies(platform, projectName, projectVersion);
    return this.requestService.get(endpoint);
  }
}
