import {RequestService} from '../../RequestService';
import {GitHubRepositoryAPI} from './GitHubRepositoryAPI';
import {GitHubUserAPI} from './GitHubUserAPI';

export class GitHubAPI {
  public repository: GitHubRepositoryAPI;
  public user: GitHubUserAPI;

  constructor(requestService: RequestService) {
    this.repository = new GitHubRepositoryAPI(requestService);
    this.user = new GitHubUserAPI(requestService);
  }
}
