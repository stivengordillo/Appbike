import {Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import {BikesConsultingService} from '../services/bikes-consulting.service';
import { sortPipe } from '../pipes/app.sort.pipe';


@Component({
	selector: 'bikesAppContent',
	templateUrl: '../views/contentHome.component.html'
})

export  class ContentHomeComponent{
	dataBikes:any;
	word:string = "Busqué mi libertad en todas partes, y la encontré justo aquí arriba de mi motocicleta";
	wordBy:string = "Penelope Anaya";
	constructor(
		private bikesConsultingService:BikesConsultingService,
		private router: Router, 
		private route:ActivatedRoute
	){
		this.bikesConsultingService.getBikes().subscribe(data =>{
			
			this.dataBikes = data;	
		} );
	}
	//direccionando al id correspondiente
	goToBikeInfo(id){
		this.router.navigate(["/bike/"+id]);
	}


}

