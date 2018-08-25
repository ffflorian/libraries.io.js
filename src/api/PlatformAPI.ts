import {Endpoint} from 'Endpoints';
import {RequestService} from 'RequestService';
import * as Interfaces from 'interfaces/';

export class PlatformAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  getPlatforms(): Promise<Interfaces.Platform> {
    const endpoint = Endpoint.platforms();
    return this.requestService.get(endpoint);
  }
}
