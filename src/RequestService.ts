import axios, { AxiosRequestConfig } from 'axios';
import {URL} from 'url';

import {ExceptionMapper} from './APIException';
import {ClientOptions} from './interfaces';

export class RequestService {
  private apiUrl = new URL('https://libraries.io/api');
  private apiKey: string;

  constructor(options: ClientOptions) {
    if (options.apiUrl) {
      this.setApiUrl(options.apiUrl);
    }
    this.apiKey = options.apiKey;
  }

  async request<T>(endpoint: string, parameters?: {[key: string]: string}): Promise<T> {
    const config = {
      params: {
        ...parameters,
        api_key: this.apiKey,
      },
      baseURL: this.apiUrl.toString(),
    }

    try {
      const response = await axios.get<T>(this.apiUrl.toString() + endpoint, config);
      return response.data;
    } catch (error) {
      throw ExceptionMapper(error);
    }
  }

  setApiUrl(newUrl: string | URL): void {
    if (typeof newUrl === 'string') {
      this.apiUrl = new URL(newUrl);
    } else {
      this.apiUrl = newUrl;
    }
  }
}
