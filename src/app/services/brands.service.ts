import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class BrandsConsultingService {
  private brands = 'http://localhost:4200/assets/json/brands.json';

  constructor(private http: HttpClient) { }
  getBrands() {
    return this.http.get(this.brands);
  }
}
