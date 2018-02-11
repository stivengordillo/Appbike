import {Component} from '@angular/core';
import { BikesConsultingService } from '../services/bikes-consulting.service';

@Component({
	selector: 'bikesAppContent',
	templateUrl: '../views/contentHome.component.html'
})

export  class ContentHomeComponent{
	word:string = "Busqué mi libertad en todas partes, y la encontré justo aquí arriba de mi motocicleta";
	wordBy:string = "Penelope Anaya";
}