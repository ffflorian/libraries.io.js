import {AxiosError} from 'axios';

export class APIException extends Error {
  constructor(statusCode?: number, statusText?: string, message?: string) {
    super(message);
    this.message =
      `Request failed with status code ${statusCode}` +
      (statusText ? `: ${statusText}.` : '.') +
      ' The server did not provide any further information.';
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class AuthenticationError extends Error {
  constructor(message = 'Authentication failed. Wrong API key?') {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class RateLimitError extends Error {
  constructor(message = 'Rate limit hit.') {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export function ExceptionMapper(error: AxiosError): Error {
  const {status: statusCode = 0, statusText = ''} = error.response || {};

  if (statusCode && statusText) {
    switch (statusCode) {
      case 403:
        return new AuthenticationError();
      case 429:
        return new RateLimitError();
      default:
        return new APIException(statusCode, statusText);
    }
  }

  return new Error(error.message);
}
