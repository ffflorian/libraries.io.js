import {URL} from 'url';

import {RequestService} from './RequestService';
import {Endpoint} from './Endpoint';
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
      project: new API.Project(this.requestService),
      repository: new API.Repository(this.requestService),
      user: new API.User(this.requestService),
      getPlatforms: () => {
        const endpoint = Endpoint.platforms();
        return this.requestService.request<Interfaces.Platform>(endpoint);
      },
      getProject: (platform: string, name: string) => {
        const endpoint = Endpoint.Project.project(encodeURIComponent(platform), encodeURIComponent(name));
        const parameters = {
          platform,
          name,
        };
        return this.requestService.request(endpoint, parameters);
      },
    };
  }

  public setApiUrl(newUrl: string | URL): void {
    this.requestService.setApiUrl(newUrl);
  }
}
