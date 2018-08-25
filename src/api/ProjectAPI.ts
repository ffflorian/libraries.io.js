import {Endpoint} from '../Endpoint';
import {RequestService} from '../RequestService';
import * as Interfaces from '../interfaces';

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

  public getDependendents(platform: string, projectName: string): Promise<Interfaces.Project[]> {
    const endpoint = Endpoint.Project.dependents(platform, projectName);
    return this.requestService.get(endpoint);
  }

  public getDependendentRepositories(platform: string, projectName: string): Promise<Interfaces.Repository[]> {
    const endpoint = Endpoint.Project.dependents(platform, projectName);
    return this.requestService.get(endpoint);
  }

  public getContributors(platform: string, projectName: string): Promise<Interfaces.Contributor[]> {
    const endpoint = Endpoint.Project.dependents(platform, projectName);
    return this.requestService.get(endpoint);
  }

  public getSourceRank(platform: string, projectName: string): Promise<number> {
    const endpoint = Endpoint.Project.sourceRank(platform, projectName);
    return this.requestService.get(endpoint);
  }

  public getUsage(platform: string, projectName: string): Promise<Interfaces.Usage> {
    const endpoint = Endpoint.Project.sourceRank(platform, projectName);
    return this.requestService.get(endpoint);
  }

  public async search(query: string, sortBy?: Interfaces.SortParameter): Promise<Interfaces.Project[]>;
  public async search(
    query: string,
    parameter: Interfaces.SearchParameters,
    sortBy?: Interfaces.SortParameter
  ): Promise<Interfaces.Project[]>;
  public async search(
    query: string,
    searchOrSort?: Interfaces.SearchParameters | Interfaces.SortParameter,
    sortBy?: Interfaces.SearchParameters | Interfaces.SortParameter
  ): Promise<Interfaces.Project[]> {
    const endpoint = Endpoint.Project.search();
    const parameters: Interfaces.RequestParameters = {
      q: query,
    };

    if (searchOrSort) {
      if (typeof searchOrSort === 'string') {
        parameters.sort = searchOrSort;
      } else {
        let param: keyof Interfaces.SearchParameters;
        for (param in searchOrSort) {
          const searchParam = searchOrSort[param];
          if (searchParam) {
            parameters[param] = searchParam.join(',');
          }
        }
        if (sortBy && typeof sortBy === 'string') {
          parameters.sort = sortBy;
        }
      }
    }

    return this.requestService.get<Interfaces.Project[]>(endpoint, parameters);
  }
}
