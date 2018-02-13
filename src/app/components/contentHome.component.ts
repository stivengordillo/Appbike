import {Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BikesConsultingService} from '../services/bikes-consulting.service';

@Component({
	selector: 'bikesAppContent',
	templateUrl: '../views/contentHome.component.html'
})

export  class ContentHomeComponent{
	dataBikes:any[];
	word:string = "Busqué mi libertad en todas partes, y la encontré justo aquí arriba de mi motocicleta";
	wordBy:string = "Penelope Anaya";
	constructor(private bikesConsultingService:BikesConsultingService){
		this.bikesConsultingService.getBikes().subscribe(function(data){
			this.dataBikes = data;
			
		} );
	}

}

