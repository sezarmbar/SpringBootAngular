import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DataService {

  constructor(private http:Http) { }
  getData(){
   return this.http.get('/api/hello').map(res=>res.text())
  }
}
