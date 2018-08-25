import {Endpoint} from '../../Endpoints';
import {RequestService} from '../../RequestService';
import {Contributor, PageOptions, Project, Repository, RequestOptions} from '../../interfaces/';

export class GitHubUserAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  public getUser(userName: string): Promise<Contributor> {
    const endpoint = Endpoint.GitHub.User.user(userName);
    return this.requestService.get(endpoint);
  }

  public getRepositories(userName: string, options?: PageOptions): Promise<Repository[]> {
    const endpoint = Endpoint.GitHub.User.repositories(userName);
    return this.requestService.get(endpoint, options);
  }

  public getProjects(userName: string, options?: PageOptions): Promise<Project[]> {
    const endpoint = Endpoint.GitHub.User.repositories(userName);
    return this.requestService.get(endpoint, options);
  }

  public getContributedProjects(userName: string, options?: PageOptions): Promise<Project[]> {
    const endpoint = Endpoint.GitHub.User.contributedProjects(userName);
    return this.requestService.get(endpoint, options);
  }

  public getContributedRepositories(userName: string, options?: PageOptions): Promise<Repository[]> {
    const endpoint = Endpoint.GitHub.User.contributedRepositories(userName);
    return this.requestService.get(endpoint, options);
  }

  public getDependencies(userName: string, options?: PageOptions): Promise<Project[]>;
  public getDependencies(userName: string, platform?: string, options?: PageOptions): Promise<Project[]>;
  public getDependencies(
    userName: string,
    platformOrOptions?: string | PageOptions,
    options?: PageOptions
  ): Promise<Project[]> {
    const endpoint = Endpoint.GitHub.User.contributedRepositories(userName);
    let parameters: RequestOptions = {};

    if (platformOrOptions) {
      if (typeof platformOrOptions === 'string') {
        parameters = {
          platform: platformOrOptions,
          ...options,
        };
      } else {
        parameters = platformOrOptions;
      }
    }

    return this.requestService.get(endpoint, parameters);
  }
}
