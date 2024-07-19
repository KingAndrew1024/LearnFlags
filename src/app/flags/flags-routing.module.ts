import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Flags1PageComponent } from './flags1-page/flags1-page.component';
import { FlagsPageComponent } from './flags-page.component';
import { Flags2PageComponent } from './flags2-page/flags2-page.component';
import { Flags3PageComponent } from './flags3-page/flags3-page.component';
import { Flags4PageComponent } from './flags4-page/flags4-page.component';
import { Flags5PageComponent } from './flags5-page/flags5-page.component';
import { Flags6PageComponent } from './flags6-page/flags6-page.component';
import { Flags7PageComponent } from './flags7-page/flags7-page.component';

const routes: Routes = [
  {
    path: '',
    component: FlagsPageComponent,
  },
  {
    path: '1',
    component: Flags1PageComponent,
  },
  {
    path: '2',
    component: Flags2PageComponent,
  },
  {
    path: '3',
    component: Flags3PageComponent,
  },
  {
    path: '4',
    component: Flags4PageComponent,
  },
  {
    path: '5',
    component: Flags5PageComponent,
  },
  {
    path: '6',
    component: Flags6PageComponent,
  },
  {
    path: '7',
    component: Flags7PageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlagsRoutingModule {}
