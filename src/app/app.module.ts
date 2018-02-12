import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent }  from './components/header.component';
import { FooterComponent }  from './components/footer.component';
import { BikesConsultingService } from './services/bikes-consulting.service';
import { ContentHomeComponent } from './components/contentHome.component';
import { ContentInternalComponent } from './components/contentInternal.component';

const appRoutes: Routes = [
  { 
    path: '', 
    component: ContentHomeComponent, 
    data: { title: 'Cambia el titulo de las pestaña' } 
  },
  {
    path: 'bikeinfo',
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
    BrowserAnimationsModule
  ],
  providers: [BikesConsultingService],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
