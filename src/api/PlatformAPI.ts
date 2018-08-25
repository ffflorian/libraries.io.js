import {Endpoint} from '../Endpoints';
import {RequestService} from '../RequestService';
import {Platform, PageOptions} from '../interfaces/';

export class PlatformAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  getPlatforms(options?: PageOptions): Promise<Platform[]> {
    const endpoint = Endpoint.platforms();
    return this.requestService.get(endpoint, options);
  }
}
