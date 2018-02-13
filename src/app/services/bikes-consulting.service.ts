import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class BikesConsultingService {
  private bikes = 'json/config.json';

  constructor(private http: HttpClient) { }
  getBikes() {
    return this.http.get("/json/config.json");
  }

}
