import {Endpoint} from '../Endpoints';
import {RequestService} from '../RequestService';
import {ProjectRelease} from '../interfaces/';

export class UserAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  public getSubscribedProject(platform: string, projectName: string): Promise<ProjectRelease[] | null> {
    const endpoint = Endpoint.subscriptions(platform, projectName);
    return this.requestService.get(endpoint);
  }

  public getSubscriptions(): Promise<ProjectRelease[]> {
    const endpoint = Endpoint.subscriptions();
    return this.requestService.get(endpoint);
  }

  public subscribe(platform: string, projectName: string, includePrerelease = false): Promise<ProjectRelease> {
    const endpoint = Endpoint.subscriptions(platform, projectName);
    const parameters = {include_prerelease: includePrerelease};
    return this.requestService.post(endpoint, parameters);
  }

  public async unsubscribe(platform: string, projectName: string): Promise<void> {
    const endpoint = Endpoint.subscriptions(platform, projectName);
    await this.requestService.delete(endpoint);
  }

  public updateSubscription(platform: string, projectName: string, includePrerelease = false): Promise<ProjectRelease> {
    const endpoint = Endpoint.subscriptions(platform, projectName);
    const parameters = {include_prerelease: includePrerelease};
    return this.requestService.put(endpoint, parameters);
  }
}
