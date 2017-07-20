// this is only used for deploy the sample to Heroku
// from auth0.com/docs. You can otherwise ignore it.

import { Inject, Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class AppConfig {

  config: any = {};
  constructor(private http: HttpClient) {}

  public load() {
    return new Promise((resolve, reject) => {
      this.http.get('/env')
        .subscribe(
          data => {
            this.config = data;
            resolve(true);
          },
          error => reject(error)
        );
    });
  }
}