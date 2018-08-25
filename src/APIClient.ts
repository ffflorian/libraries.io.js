import {URL} from 'url';

import {RequestService} from './RequestService';
import * as Interfaces from './interfaces/';
import * as API from './api/';

export class LibrariesIO {
  private readonly requestService: RequestService;
  private options: Interfaces.ClientOptions;
  public api: Interfaces.API;

  constructor(apiKey: string);
  constructor(options: Interfaces.ClientOptions);
  constructor(options: Interfaces.ClientOptions | string) {
    if (typeof options === 'string') {
      options = {apiKey: options};
    }

    this.options = options;

    if (!this.options.apiKey) {
      throw new Error('An API key needs to be set in order to use the client.');
    }

    this.requestService = new RequestService(options);

    this.api = {
      platform: new API.Platform(this.requestService),
      project: new API.Project(this.requestService),
      repository: new API.Repository(this.requestService),
      user: new API.User(this.requestService),
    };
  }

  public setApiUrl(newUrl: string | URL): void {
    this.requestService.setApiUrl(newUrl);
  }
}
