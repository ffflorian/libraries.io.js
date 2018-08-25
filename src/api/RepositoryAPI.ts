import {Endpoint} from '../Endpoint';
import {RequestService} from '../RequestService';
import {RepositoryWithDependencies} from '../interfaces';

export class RepositoryAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  public getDependencies(
    repositoryOwner: string,
    repositoryName: string
  ): Promise<RepositoryWithDependencies[]> {
    const endpoint = Endpoint.Repository.dependencies(repositoryOwner, repositoryName);
    return this.requestService.get(endpoint);
  }
}
