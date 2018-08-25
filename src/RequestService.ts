import axios, {AxiosRequestConfig} from 'axios';
import {URL} from 'url';

import {ExceptionMapper} from './APIException';
import {ClientOptions, FilterOptions, RequestOptions} from './interfaces/';

export type HttpMethod = 'DELETE' | 'GET' | 'POST' | 'PUT';

export class RequestService {
  private apiUrl = new URL('https://libraries.io/api');
  private apiKey: string;

  constructor(options: ClientOptions) {
    if (options.apiUrl) {
      this.setApiUrl(options.apiUrl);
    }
    this.apiKey = options.apiKey;
  }

  public delete<T>(endpoint: string, parameters?: RequestOptions): Promise<T> {
    return this.request<T>('DELETE', endpoint, parameters);
  }

  public get<T>(endpoint: string, parameters?: RequestOptions): Promise<T> {
    return this.request<T>('GET', endpoint, parameters);
  }

  public post<T>(endpoint: string, parameters?: RequestOptions): Promise<T> {
    return this.request<T>('POST', endpoint, parameters);
  }

  public put<T>(endpoint: string, parameters?: RequestOptions): Promise<T> {
    return this.request<T>('PUT', endpoint, parameters);
  }

  public setApiUrl(newUrl: string | URL): void {
    if (typeof newUrl === 'string') {
      this.apiUrl = new URL(newUrl);
    } else {
      this.apiUrl = newUrl;
    }
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
      url: this.apiUrl.toString() + endpoint,
    };

    try {
      const response = await axios.request<T>(config);
      return response.data;
    } catch (error) {
      throw ExceptionMapper(error);
    }
  }
}
