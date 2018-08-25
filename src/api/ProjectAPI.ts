import {Endpoint} from '../Endpoints';
import {RequestService} from '../RequestService';
import * as Interfaces from '../interfaces/';

export class ProjectAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  public getProject(platform: string, projectName: string): Promise<Interfaces.Project> {
    const endpoint = Endpoint.Project.project(platform, projectName);
    return this.requestService.get(endpoint);
  }

  public getProjectWithDependencies(
    platform: string,
    projectName: string,
    projectVersion: string
  ): Promise<Interfaces.ProjectWithDependencies> {
    const endpoint = Endpoint.Project.dependencies(platform, projectName, projectVersion);
    return this.requestService.get(endpoint);
  }

  public getDependendentProjects(
    platform: string,
    projectName: string,
    options?: Interfaces.PageOptions
  ): Promise<Interfaces.Project[]> {
    const endpoint = Endpoint.Project.dependents(platform, projectName);
    return this.requestService.get(endpoint, options);
  }

  public getDependendentRepositories(
    platform: string,
    projectName: string,
    options?: Interfaces.PageOptions
  ): Promise<Interfaces.Repository[]> {
    const endpoint = Endpoint.Project.dependents(platform, projectName);
    return this.requestService.get(endpoint, options);
  }

  public getContributors(
    platform: string,
    projectName: string,
    options?: Interfaces.PageOptions
  ): Promise<Interfaces.Contributor[]> {
    const endpoint = Endpoint.Project.dependents(platform, projectName);
    return this.requestService.get(endpoint, options);
  }

  public getSourceRank(platform: string, projectName: string): Promise<number> {
    const endpoint = Endpoint.Project.sourceRank(platform, projectName);
    return this.requestService.get(endpoint);
  }

  public getUsage(platform: string, projectName: string): Promise<Interfaces.ProjectUsage> {
    const endpoint = Endpoint.Project.sourceRank(platform, projectName);
    return this.requestService.get(endpoint);
  }

  public search(query: string, options?: Interfaces.SearchOptions): Promise<Interfaces.Project[]> {
    const endpoint = Endpoint.Project.search();
    return this.requestService.get(endpoint, {...options, query});
  }
}
