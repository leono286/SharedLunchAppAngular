import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DataService {

  url = "https://shared-lunch.firebaseio.com/users.json";

  constructor( private http: HttpClient) { }

  loadData(){
    return this.http.get<any>(this.url);
  }

}
