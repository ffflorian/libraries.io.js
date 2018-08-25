import {Endpoint} from 'Endpoints';
import {RequestService} from 'RequestService';
import {Contributor, Project, Repository} from 'interfaces/';

export class GitHubUserAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  public getUser(userName: string): Promise<Contributor> {
    const endpoint = Endpoint.GitHub.User.user(userName);
    return this.requestService.get(endpoint);
  }

  public getRepositories(userName: string): Promise<Repository[]> {
    const endpoint = Endpoint.GitHub.User.repositories(userName);
    return this.requestService.get(endpoint);
  }

  public getProjects(userName: string): Promise<Project[]> {
    const endpoint = Endpoint.GitHub.User.repositories(userName);
    return this.requestService.get(endpoint);
  }

  public getContributedProjects(userName: string): Promise<Project[]> {
    const endpoint = Endpoint.GitHub.User.contributedProjects(userName);
    return this.requestService.get(endpoint);
  }

  public getContributedRepositories(userName: string): Promise<Repository[]> {
    const endpoint = Endpoint.GitHub.User.contributedRepositories(userName);
    return this.requestService.get(endpoint);
  }

  public getDependencies(userName: string, platform?: string): Promise<Repository[]> {
    const endpoint = Endpoint.GitHub.User.contributedRepositories(userName);
    return this.requestService.get(endpoint);
  }
}
