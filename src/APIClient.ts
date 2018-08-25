import {URL} from 'url';

import {RequestService} from './RequestService';
import {ClientOptions, API} from './interfaces/';
import {GitHubAPI, PlatformAPI, ProjectAPI, UserAPI} from './api/';

export class LibrariesIO {
  private readonly requestService: RequestService;
  private options: ClientOptions;
  public api: API;

  constructor(apiKey: string);
  constructor(options: ClientOptions);
  constructor(options: ClientOptions | string) {
    if (typeof options === 'string') {
      options = {apiKey: options};
    }

    this.options = options;

    if (!this.options.apiKey) {
      throw new Error('An API key needs to be set in order to use the client.');
    }

    this.requestService = new RequestService(options);

    this.api = {
      github: new GitHubAPI(this.requestService),
      platform: new PlatformAPI(this.requestService),
      project: new ProjectAPI(this.requestService),
      user: new UserAPI(this.requestService),
    };
  }

  public setApiUrl(newUrl: URL): void {
    this.requestService.setApiUrl(newUrl);
  }
}
