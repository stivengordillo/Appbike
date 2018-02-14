import {Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BikesConsultingService } from '../services/bikes-consulting.service';


@Component({
	selector: 'bikesAppContent',
	templateUrl: '../views/contentInternal.component.html'
})

export  class ContentInternalComponent{
	id:any;
	bike:any;
	data:any;
	word: string = "Dominar el ego es una de la habilidades que un biker aprende durante el camino. ";
	wordBy: string = "Yany";
	constructor(
		private router: Router,
		private route:ActivatedRoute,
		private bikeId:BikesConsultingService
	){
		// obteniendo el parametro id de la url
		this.id = route.snapshot.params.id;
		// llamando al servicio

		this.bikeId.getBikes()
			.subscribe(respond =>{
				this.data = respond;
				for(let i=0; i<this.data.length; i++){
					if(this.data[i].id == this.id){
						this.bike = this.data[i];
					}
				}
			
				console.log(this.bike)
			})
		
		//this.bikeId.getBikesById(this.id);
	}
	
}