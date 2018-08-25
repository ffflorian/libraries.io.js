import {RequestService} from '../RequestService';
import * as Interfaces from '../interfaces/';
import {Endpoint} from '../Endpoint';

export class User {
  constructor(private readonly requestService: RequestService) {}

  getSubscriptions(): Promise<Interfaces.ProjectRelease[]> {
    const endpoint = Endpoint.subscriptions();
    return this.requestService.get(endpoint);
  }

  addSubscription(
    platform: string,
    projectName: string,
    includePrerelease = false
  ): Promise<Interfaces.ProjectRelease> {
    const endpoint = Endpoint.subscriptions(platform, projectName);
    const parameters = {
      include_prerelease: includePrerelease,
      name: projectName,
      platform,
    };

    return this.requestService.post(endpoint, parameters);
  }

  updateSubscription(
    platform: string,
    projectName: string,
    includePrerelease = false
  ): Promise<Interfaces.ProjectRelease> {
    const endpoint = Endpoint.subscriptions(platform, projectName);
    const parameters = {
      include_prerelease: includePrerelease,
      name: projectName,
      platform,
    };
    return this.requestService.put(endpoint, parameters);
  }
}
