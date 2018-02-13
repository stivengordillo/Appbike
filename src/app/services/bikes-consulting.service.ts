import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class BikesConsultingService {
  readonly jsonRoutes = "../json/config.json";
  post:any;

  constructor(private http: HttpClient){}
  
  getPosts(){
    alert('hi')
    this.post = this.http.get(this.jsonRoutes + '/bikes');
  }
}
