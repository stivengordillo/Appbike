import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent }  from './components/header.component';
import { ContentHomeComponent }  from './components/contentHome.component';
import { FooterComponent }  from './components/footer.component';
import { BikesConsultingService } from './services/bikes-consulting.service';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent , ContentHomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BikesConsultingService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
