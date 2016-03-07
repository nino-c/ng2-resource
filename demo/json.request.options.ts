import {RequestOptions,RequestMethod,Headers} from 'angular2/http';

export class JsonRequest extends RequestOptions {
  constructor() {
    super({
      method: RequestMethod.Get,
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
  }
}