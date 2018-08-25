import {URL} from 'url';

import {RequestService} from './RequestService';
import {ClientOptions, Endpoint, Platform} from './interfaces';

export class LibrariesIO {
  private readonly requestService: RequestService;
  private options: ClientOptions;

  constructor(apiKey: string);
  constructor(options: ClientOptions);
  constructor(options: ClientOptions | string) {
    if (typeof options === 'string') {
      options = { apiKey: options };
    }

    this.options = options;

    if (!this.options.apiKey) {
      throw new Error('An API key needs to be set in order to use the client.');
    }

    this.requestService = new RequestService(options);
  }

  setApiUrl(newUrl: string | URL): void {
    this.requestService.setApiUrl(newUrl);
  }

  async platforms(): Promise<Platform> {
    const endpoint = Endpoint.platforms();
    return this.requestService.request<Platform>(endpoint);
  }
}
