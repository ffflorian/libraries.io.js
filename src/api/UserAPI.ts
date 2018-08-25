import {Endpoint} from '../Endpoint';
import {RequestService} from '../RequestService';
import {Parameters, ProjectRelease} from '../interfaces';

export class UserAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  public getSubscriptions(): Promise<ProjectRelease[]> {
    const endpoint = Endpoint.subscriptions();
    return this.requestService.get(endpoint);
  }

  public addSubscription(platform: string, projectName: string, includePrerelease = false): Promise<ProjectRelease> {
    const endpoint = Endpoint.subscriptions(platform, encodeURIComponent(projectName));
    const parameters: Parameters = {
      include_prerelease: includePrerelease,
    };

    return this.requestService.post(endpoint, parameters);
  }

  public async removeSubscription(platform: string, projectName: string): Promise<void> {
    const endpoint = Endpoint.subscriptions(platform, encodeURIComponent(projectName));
    await this.requestService.delete(endpoint);
  }

  public updateSubscription(platform: string, projectName: string, includePrerelease = false): Promise<ProjectRelease> {
    const endpoint = Endpoint.subscriptions(platform, encodeURIComponent(projectName));
    const parameters = {include_prerelease: includePrerelease};
    return this.requestService.put(endpoint, parameters);
  }
}
