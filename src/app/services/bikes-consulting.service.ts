import { Injectable } from '@angular/core';

@Injectable()

export class BikesConsultingService {
  getBikes(){
    return 'Mensaje desde el servicio';
  }
  constructor() { }

}
