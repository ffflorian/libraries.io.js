import {Endpoint} from '../Endpoint';
import {RequestService} from '../RequestService';
import * as Interfaces from '../interfaces/';

export class Project {
  constructor(private readonly requestService: RequestService) {}

  public getProject(platform: string, name: string): Promise<Interfaces.Project> {
    const endpoint = Endpoint.Project.project(encodeURIComponent(platform), encodeURIComponent(name));
    const parameters = {
      platform,
      name,
    };
    return this.requestService.get(endpoint, parameters);
  }
}
