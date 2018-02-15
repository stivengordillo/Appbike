import {Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import {BikesConsultingService} from '../services/bikes-consulting.service';
import {BrandsConsultingService} from '../services/brands.service';



@Component({
	selector: 'bikesAppContent',
	templateUrl: '../views/contentHome.component.html'
})

export  class ContentHomeComponent{
	dataBikes:any;
	dataBrands:any;
	word:string = "Busqué mi libertad en todas partes, y la encontré justo aquí arriba de mi motocicleta";
	wordBy:string = "Penelope Anaya";
	constructor(
		private bikesConsultingService:BikesConsultingService,
		private router: Router, 
		private route:ActivatedRoute,
		private brandsService: BrandsConsultingService
	){
		this.bikesConsultingService.getBikes().subscribe(data =>{
			
			this.dataBikes = data;	
		} );
		this.brandsService.getBrands().subscribe(data =>{
			this.dataBrands = data;	
		} );
	}
	//direccionando al id correspondiente
	goToBikeInfo(id){
		this.router.navigate(["/bike/"+id]);
	}
	changeSelectedBrand(nombre){
		this.bikesConsultingService.getBikes().subscribe(data =>{
			this.dataBikes = data;
			let tempArray = [];
			//debugger
			if(nombre != "todas"){
				for(let i=0; i<this.dataBikes.length; i++){
					if(this.dataBikes[i].ref === nombre )
					{
						tempArray.push(this.dataBikes[i])
					}
				}
				this.dataBikes = tempArray;	
			}
			
		} );
		

	}


}

