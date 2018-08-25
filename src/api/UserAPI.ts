import {Endpoint} from '../Endpoints';
import {RequestService} from '../RequestService';
import {PaginationOptions, PreReleaseOptions, Subscription} from '../interfaces/';

export class UserAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  /**
   * Check if a users is subscribed to receive notifications about new releases of a project.
   * @see https://libraries.io/api#subscriptions-show
   * @param platform The project platform (e.g. "npm", "cargo", ...)
   * @param projectName The project name
   */
  public getSubscription(platform: string, projectName: string): Promise<Subscription | null> {
    const endpoint = Endpoint.subscriptions(platform, projectName);
    return this.requestService.get(endpoint);
  }

  /**
   * List packages that a user is subscribed to recieved notifications about new releases.
   * @see https://libraries.io/api#subscriptions-index
   * @param options Pagination options
   */
  public getAllSubscriptions(options?: PaginationOptions): Promise<Subscription[]> {
    const endpoint = Endpoint.subscriptions();
    return this.requestService.get(endpoint, options);
  }

  /**
   * Subscribe to receive notifications about new releases of a project.
   * @see https://libraries.io/api#subscriptions-create
   * @param platform The project platform (e.g. "npm", "cargo", ...)
   * @param projectName The project name
   * @param options Subscription options
   */
  public subscribe(platform: string, projectName: string, options?: PreReleaseOptions): Promise<Subscription> {
    const endpoint = Endpoint.subscriptions(platform, projectName);
    return this.requestService.post(endpoint, options);
  }

  /**
   * Stop receiving release notifications from a project.
   * @see https://libraries.io/api#subscriptions-destroy
   * @param platform The project platform (e.g. "npm", "cargo", ...)
   * @param projectName The project name
   */
  public async unsubscribe(platform: string, projectName: string): Promise<void> {
    const endpoint = Endpoint.subscriptions(platform, projectName);
    await this.requestService.delete(endpoint);
  }

  /**
   * Update the options for a subscription.
   * @see https://libraries.io/api#subscriptions-update
   * @param platform The project platform (e.g. "npm", "cargo", ...)
   * @param projectName The project name
   * @param options Subscription options
   */
  public updateSubscription(platform: string, projectName: string, options?: PreReleaseOptions): Promise<Subscription> {
    const endpoint = Endpoint.subscriptions(platform, projectName);
    return this.requestService.put(endpoint, options);
  }
}
