import axios, {AxiosRequestConfig} from 'axios';
import {URL, format} from 'url';

import {ExceptionMapper, InvalidResponseError} from './APIException';
import {ClientOptions, FilterOptions, RequestOptions} from './interfaces/';

export type HttpMethod = 'delete' | 'get' | 'post' | 'put';

export class RequestService {
  private apiUrl = new URL('/api', 'https://libraries.io');
  private apiKey: string;

  constructor(options: ClientOptions) {
    if (options.apiUrl) {
      this.setApiUrl(options.apiUrl);
    }
    this.apiKey = options.apiKey;
  }

  public delete<T>(endpoint: string, parameters?: RequestOptions): Promise<T> {
    return this.request<T>('delete', endpoint, parameters);
  }

  public get<T>(endpoint: string, parameters?: RequestOptions): Promise<T> {
    return this.request<T>('get', endpoint, parameters);
  }

  public post<T>(endpoint: string, parameters?: RequestOptions): Promise<T> {
    return this.request<T>('post', endpoint, parameters);
  }

  public put<T>(endpoint: string, parameters?: RequestOptions): Promise<T> {
    return this.request<T>('put', endpoint, parameters);
  }

  public setApiUrl(apiUrl: URL): void {
    this.apiUrl = apiUrl;
  }

  private static mapParameters(requestParameters?: RequestOptions) {
    const map: {[index: string]: string} = {
      apiKey: 'api_key',
      includePreRelease: 'include_prerelease',
      perPage: 'per_page',
      sortBy: 'sort',
      query: 'q',
    };

    const mappedParameters: {[index: string]: string | boolean | number | FilterOptions} = {};

    if (requestParameters) {
      for (const parameterKey in requestParameters) {
        let parameterValue = requestParameters[parameterKey as keyof RequestOptions];
        if (parameterValue) {
          const mappedOption = parameterKey in map ? map[parameterKey] : parameterKey;
          if (typeof parameterValue === 'object' && Object.values(parameterValue).some(val => val instanceof Array)) {
            for (const filterKey in parameterValue) {
              const filterValue = parameterValue[filterKey as keyof FilterOptions];
              if (filterValue) {
                mappedParameters[filterKey] = filterValue.join(',');
              }
            }
          } else if (parameterValue instanceof Array) {
            parameterValue = parameterValue.join(',');
          } else {
            mappedParameters[mappedOption] = parameterValue;
          }
        }
      }
    }

    return mappedParameters;
  }

  private async request<T>(method: HttpMethod, endpoint: string, parameters?: RequestOptions): Promise<T> {
    const params = RequestService.mapParameters({
      ...parameters,
      apiKey: this.apiKey,
    });

    const config: AxiosRequestConfig = {
      method,
      params,
      url: new URL(this.apiUrl.pathname + endpoint, this.apiUrl).href,
    };

    try {
      const response = await axios.request<T>(config);
      const contentType = response.headers['content-type'] as string;
      if (contentType) {
        if (contentType.includes('application/json')) {
          return response.data;
        } else {
          throw new InvalidResponseError('The server responded with invalid data: No JSON sent.');
        }
      } else {
        throw new InvalidResponseError('The server responded with invalid data: No Content-Type set.');
      }
    } catch (error) {
      throw ExceptionMapper(error);
    }
  }
}
