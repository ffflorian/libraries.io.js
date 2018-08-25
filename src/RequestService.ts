import axios, {AxiosRequestConfig} from 'axios';
import {URL} from 'url';

import {ExceptionMapper} from './APIException';
import {ClientOptions} from './interfaces';

export type Parameters = {
  [key: string]: string | boolean | number;
};

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export class RequestService {
  private apiUrl = new URL('https://libraries.io/api');
  private apiKey: string;

  constructor(options: ClientOptions) {
    if (options.apiUrl) {
      this.setApiUrl(options.apiUrl);
    }
    this.apiKey = options.apiKey;
  }

  public delete<T>(endpoint: string, parameters?: Parameters): Promise<T> {
    return this.request<T>('DELETE', endpoint, parameters);
  }

  public async request<T>(method: HttpMethod, endpoint: string, parameters?: Parameters): Promise<T> {
    const config: AxiosRequestConfig = {
      method,
      params: {
        ...parameters,
        api_key: this.apiKey,
      },
      url: this.apiUrl.toString() + endpoint,
    };

    try {
      const response = await axios.request<T>(config);
      return response.data;
    } catch (error) {
      throw ExceptionMapper(error);
    }
  }

  public get<T>(endpoint: string, parameters?: Parameters): Promise<T> {
    return this.request<T>('GET', endpoint, parameters);
  }

  public post<T>(endpoint: string, parameters?: Parameters): Promise<T> {
    return this.request<T>('POST', endpoint, parameters);
  }

  public put<T>(endpoint: string, parameters?: Parameters): Promise<T> {
    return this.request<T>('PUT', endpoint, parameters);
  }

  public setApiUrl(newUrl: string | URL): void {
    if (typeof newUrl === 'string') {
      this.apiUrl = new URL(newUrl);
    } else {
      this.apiUrl = newUrl;
    }
  }
}
