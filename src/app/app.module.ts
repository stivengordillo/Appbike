import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent }  from './components/header.component';
import { FooterComponent }  from './components/footer.component';
import { ContentHomeComponent } from './components/contentHome.component';
import { ContentInternalComponent } from './components/contentInternal.component';

import { BikesConsultingService } from './services/bikes-consulting.service';
import { BrandsConsultingService } from './services/brands.service';

const appRoutes: Routes = [
  { 
    path: '', 
    component: ContentHomeComponent, 
    data: { title: 'Cambia el titulo de las pestaña' } 
  },
  {
    path: 'bike/:id',
    component: ContentInternalComponent,
    data: { title: 'Más información sobre'}
  }
];


@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, ContentHomeComponent, ContentInternalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule , 
    FormsModule
  ],
  providers: [BikesConsultingService, BrandsConsultingService],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
