import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class BikesConsultingService {
  private bikes = 'http://localhost:4200/assets/json/config.json';

  constructor(private http: HttpClient) { }
  getBikes() {
    return this.http.get(this.bikes);
  }

  getBikesById(id) {
    return this.http.get(this.bikes);
  }

}
