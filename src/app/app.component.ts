import { Component } from '@angular/core';

@Component({
  selector: 'bikesApp',
  template: `
    <bikesAppHeader></bikesAppHeader>
    <router-outlet></router-outlet>
  	<bikesAppFooter></bikesAppFooter>
  `
})
export class AppComponent {
 
}
