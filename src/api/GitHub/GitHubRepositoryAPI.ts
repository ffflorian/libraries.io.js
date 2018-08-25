import {Endpoint} from '../../Endpoints';
import {RequestService} from '../../RequestService';
import {Project, RepositoryWithDependencies} from '../../interfaces/';

export class GitHubRepositoryAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  public getRepository(repositoryOwner: string, repositoryName: string): Promise<RepositoryWithDependencies> {
    const endpoint = Endpoint.GitHub.Repository.repository(repositoryOwner, repositoryName);
    return this.requestService.get(endpoint);
  }

  public getRepositoryWithDependencies(
    repositoryOwner: string,
    repositoryName: string
  ): Promise<RepositoryWithDependencies[]> {
    const endpoint = Endpoint.GitHub.Repository.dependencies(repositoryOwner, repositoryName);
    return this.requestService.get(endpoint);
  }

  public getProjects(repositoryOwner: string, repositoryName: string): Promise<Project[]> {
    const endpoint = Endpoint.GitHub.Repository.projects(repositoryOwner, repositoryName);
    return this.requestService.get(endpoint);
  }
}
