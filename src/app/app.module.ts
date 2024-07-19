import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ConfigComponent } from './config/config.component';
import { CountriesService } from 'src/services/countries.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ConfigComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    CountriesService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
