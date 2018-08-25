import {Endpoint} from '../Endpoint';
import {RequestService} from '../RequestService';
import * as Interfaces from '../interfaces';

export class RepositoryAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }
}
