import { Injectable } from '@angular/core';

@Injectable()

export class BikesConsultingService {
  getProveedores(){
    return 'Mensaje desde el servicio';
  }
  constructor() { }

}
