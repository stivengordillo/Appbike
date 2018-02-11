import {Component} from '@angular/core';
import {Bike}      from '../models/bikes.model';

@Component({
	selector: 'bikesAppContent',
	templateUrl: '../views/content.component.html'
})

export  class ContentComponent{
	bike = new Bike("harley","motor honda","2 ciclos","6 marchas","1 transmisiíon","10 cilindros", "45.000 euros")
}