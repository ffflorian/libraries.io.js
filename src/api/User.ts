import {Endpoint} from '../Endpoint';
import {RequestService} from '../RequestService';
import * as Interfaces from '../interfaces/';

export class User {
  constructor(private readonly requestService: RequestService) {}

  public getSubscriptions(): Promise<Interfaces.ProjectRelease[]> {
    const endpoint = Endpoint.subscriptions();
    return this.requestService.get(endpoint);
  }

  public addSubscription(
    platform: string,
    projectName: string,
    includePrerelease = false
  ): Promise<Interfaces.ProjectRelease> {
    const endpoint = Endpoint.subscriptions(platform, encodeURIComponent(projectName));
    const parameters = {
      include_prerelease: includePrerelease,
      name: projectName,
      platform,
    };

    return this.requestService.post(endpoint, parameters);
  }

  public async removeSubscription(platform: string, projectName: string): Promise<void> {
    const endpoint = Endpoint.subscriptions(platform, encodeURIComponent(projectName));
    const parameters = {
      name: projectName,
      platform,
    };

    await this.requestService.delete(endpoint, parameters);
  }

  public updateSubscription(
    platform: string,
    projectName: string,
    includePrerelease = false
  ): Promise<Interfaces.ProjectRelease> {
    const endpoint = Endpoint.subscriptions(platform, encodeURIComponent(projectName));
    const parameters = {
      include_prerelease: includePrerelease,
      name: projectName,
      platform,
    };
    return this.requestService.put(endpoint, parameters);
  }
}
