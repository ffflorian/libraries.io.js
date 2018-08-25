import {Endpoint} from '../Endpoint';
import {RequestService} from '../RequestService';
import * as Interfaces from '../interfaces/';

export class Platform {
  constructor(private readonly requestService: RequestService) {}

  getPlatforms(): Promise<Interfaces.Platform> {
    const endpoint = Endpoint.platforms();
    return this.requestService.get(endpoint);
  }
}
