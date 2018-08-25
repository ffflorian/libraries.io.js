import {Endpoint} from '../Endpoint';
import {RequestService} from '../RequestService';
import {Contributor, Project, ProjectWithDependencies, Repository} from '../interfaces';

export class ProjectAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  public getProject(platform: string, projectName: string): Promise<Project> {
    const endpoint = Endpoint.Project.project(encodeURIComponent(platform), encodeURIComponent(projectName));
    return this.requestService.get(endpoint);
  }

  public getProjectWithDependencies(
    platform: string,
    projectName: string,
    projectVersion: string
  ): Promise<ProjectWithDependencies> {
    const endpoint = Endpoint.Project.dependencies(platform, projectName, projectVersion);
    return this.requestService.get(endpoint);
  }

  public getDependendents(platform: string, projectName: string): Promise<Project[]> {
    const endpoint = Endpoint.Project.dependents(platform, projectName);
    return this.requestService.get(endpoint);
  }

  public getDependendentRepositories(platform: string, projectName: string): Promise<Repository[]> {
    const endpoint = Endpoint.Project.dependents(platform, projectName);
    return this.requestService.get(endpoint);
  }

  public getContributors(platform: string, projectName: string): Promise<Contributor[]> {
    const endpoint = Endpoint.Project.dependents(platform, projectName);
    return this.requestService.get(endpoint);
  }
}
