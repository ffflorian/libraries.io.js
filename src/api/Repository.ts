import {Endpoint} from '../Endpoint';
import {RequestService} from '../RequestService';
import * as Interfaces from '../interfaces/';

export class Repository {
  constructor(private readonly requestService: RequestService) {}
}
