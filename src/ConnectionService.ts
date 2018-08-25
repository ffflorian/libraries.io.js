import axios, { AxiosRequestConfig } from 'axios';
import {URL} from 'url';

import {APIException} from './APIException';

export class RequestService {
  private baseUrl = new URL('https://libraries.io/api');

  constructor(private readonly API_KEY: string) {

  }

  async request(url: string, config?: AxiosRequestConfig): Promise<any> {
    try {
      const response = await axios.get(this.baseUrl.toString() + url, config);
      return response.data;
    } catch (error) {
      const {status: statusCode = 0, statusText = ''} = error.response || {};
      if (statusCode && statusText) {
        throw new APIException(`Request failed with status code ${statusCode}: ${statusText}.`);
      }
      throw error;
    }
  }

  setBaseUrl(newUrl: string): void {
    this.baseUrl = new URL(newUrl);
  }
}
