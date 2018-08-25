import {Endpoint} from '../Endpoints';
import {RequestService} from '../RequestService';
import {PageOptions, PreReleaseOptions, ProjectRelease} from '../interfaces/';

export class UserAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  public getSubscribedProject(platform: string, projectName: string): Promise<ProjectRelease[] | null> {
    const endpoint = Endpoint.subscriptions(platform, projectName);
    return this.requestService.get(endpoint);
  }

  public getSubscriptions(options?: PageOptions): Promise<ProjectRelease[]> {
    const endpoint = Endpoint.subscriptions();
    return this.requestService.get(endpoint, options);
  }

  public subscribe(platform: string, projectName: string, options?: PreReleaseOptions): Promise<ProjectRelease> {
    const endpoint = Endpoint.subscriptions(platform, projectName);
    return this.requestService.post(endpoint, options);
  }

  public async unsubscribe(platform: string, projectName: string): Promise<void> {
    const endpoint = Endpoint.subscriptions(platform, projectName);
    await this.requestService.delete(endpoint);
  }

  public updateSubscription(
    platform: string,
    projectName: string,
    options?: PreReleaseOptions
  ): Promise<ProjectRelease> {
    const endpoint = Endpoint.subscriptions(platform, projectName);
    return this.requestService.put(endpoint, options);
  }
}
