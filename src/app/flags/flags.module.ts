import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FlagsRoutingModule } from './flags-routing.module';
import { FlagsPageComponent } from './flags-page.component';
import { Flags1PageComponent } from './flags1-page/flags1-page.component';
import { Flags2PageComponent } from './flags2-page/flags2-page.component';
import { Flags3PageComponent } from './flags3-page/flags3-page.component';
import { Flags4PageComponent } from './flags4-page/flags4-page.component';
import { Flags5PageComponent } from './flags5-page/flags5-page.component';
import { Flags6PageComponent } from './flags6-page/flags6-page.component';
import { Flags7PageComponent } from './flags7-page/flags7-page.component';

@NgModule({
  declarations: [
    FlagsPageComponent,
    Flags1PageComponent,
    Flags2PageComponent,
    Flags3PageComponent,
    Flags4PageComponent,
    Flags5PageComponent,
    Flags6PageComponent,
    Flags7PageComponent,
  ],
  imports: [CommonModule, IonicModule, FlagsRoutingModule],
})
export class FlagsModule {}
