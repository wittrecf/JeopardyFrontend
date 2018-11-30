import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class JeopardyService {
  baseUri: string;
  dataUrl: string;
  limit = 100;
   private headers = new Headers({
    'Content-Type': 'application/json'
  });
  constructor(private http: Http, baseAPIUri: string) {
    this.baseUri = baseAPIUri;
  }

getData() {
       this.dataUrl = this.baseUri + 'score=100';
       this.dataUrl = this.dataUrl;
       const requestOptions = {                                                                                                                                                                                 
        headers: this.headers, 
      };
       return this. http.get(this.dataUrl, requestOptions).pipe(map(res => res.json()));
   }
}