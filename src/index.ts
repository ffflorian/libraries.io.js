import {URL} from 'url';

import {RequestService} from './RequestService';
import {ClientOptions} from './interfaces';

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
      throw new Error('An API key needs to be set to use the client.');
    }

    this.requestService = new RequestService(options);
  }

  setApiUrl(newUrl: string | URL): void {
    this.requestService.setApiUrl(newUrl);
  }
}
