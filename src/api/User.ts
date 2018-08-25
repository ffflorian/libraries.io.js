import {RequestService} from '../RequestService';
import * as Interfaces from '../interfaces/';
import { Endpoint } from '../Endpoint';

export class User {
  constructor(private readonly requestService: RequestService) {}

  getSubscriptions(userName: string): Promise<Interfaces.ProjectRelease[]> {
    const endpoint = Endpoint.subscriptions();
    const params = {
      name: encodeURIComponent(userName)
    }
    return this.requestService.request(endpoint, params);
  }
}
