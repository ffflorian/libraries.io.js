import {URL} from 'url';

import {RequestService} from './RequestService';
import {Endpoint} from './Endpoint';
import * as Interfaces from './interfaces';

const encode: typeof encodeURIComponent = encodeURIComponent;

export class LibrariesIO {
  private readonly requestService: RequestService;
  private options: Interfaces.ClientOptions;

  constructor(apiKey: string);
  constructor(options: Interfaces.ClientOptions);
  constructor(options: Interfaces.ClientOptions | string) {
    if (typeof options === 'string') {
      options = { apiKey: options };
    }

    this.options = options;

    if (!this.options.apiKey) {
      throw new Error('An API key needs to be set in order to use the client.');
    }

    this.requestService = new RequestService(options);
  }

  public setApiUrl(newUrl: string | URL): void {
    this.requestService.setApiUrl(newUrl);
  }

  public platforms(): Promise<Interfaces.Platform> {
    const endpoint = Endpoint.platforms();
    return this.requestService.request<Interfaces.Platform>(endpoint);
  }

  public project(platform: string, name: string): Promise<Interfaces.Project> {
    const endpoint = Endpoint.Project.project(encode(platform), encode(name));
    const parameters = {
      platform,
      name
    };
    return this.requestService.request<Interfaces.Project>(endpoint, parameters);
  }
}
