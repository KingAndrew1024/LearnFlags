import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalsPageComponent } from './capitals-page.component';
import { Capitals1PageComponent } from './capitals1-page/capitals1-page.component';
import { Capitals2PageComponent } from './capitals2-page/capitals2-page.component';
import { Capitals3PageComponent } from './capitals3-page/capitals3-page.component';
import { Capitals4PageComponent } from './capitals4-page/capitals4-page.component';
import { IonicModule } from '@ionic/angular';
import { CapitalsRoutingModule } from './capitals.routing.module';

@NgModule({
  declarations: [
    CapitalsPageComponent,
    Capitals1PageComponent,
    Capitals2PageComponent,
    Capitals3PageComponent,
    Capitals4PageComponent,
  ],
  imports: [CommonModule, IonicModule, CapitalsRoutingModule],
})
export class CapitalsModule {}
