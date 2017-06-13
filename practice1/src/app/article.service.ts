import { Injectable,OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { jsonModel } from './json.model';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

@Injectable()
export class ArticleService {
  private jsonUrl: string = "https://api.myjson.com/bins/109lkz";

  constructor(private http: Http) {
  }

  getArticles(): Observable < jsonModel[] > {
    return this.http.get(this.jsonUrl).map((response: Response) => {
            return < jsonModel[] > response.json();
          }).catch(this.handleError);
  }

  private handleError(errorResponse: Response) {
    console.log(errorResponse.statusText);
    return Observable.throw(errorResponse.json().error || "Server error");
  }
}
