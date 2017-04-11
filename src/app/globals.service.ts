import { Injectable } from '@angular/core';

@Injectable()
export class GlobalsService {

  private token = 0;

  constructor() { }

  setToken(val)
  {
    this.token = val;
  }

  getToken()
  {
    return this.token;
  }
}
