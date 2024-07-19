import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Capitals1PageComponent } from './capitals1-page/capitals1-page.component';
import { CapitalsPageComponent } from './capitals-page.component';
import { Capitals2PageComponent } from './capitals2-page/capitals2-page.component';
import { Capitals3PageComponent } from './capitals3-page/capitals3-page.component';
import { Capitals4PageComponent } from './capitals4-page/capitals4-page.component';

const routes: Routes = [
  {
    path: '',
    component: CapitalsPageComponent,
  },
  {
    path: '1',
    component: Capitals1PageComponent,
  },
  {
    path: '2',
    component: Capitals2PageComponent,
  },
  {
    path: '3',
    component: Capitals3PageComponent,
  },
  {
    path: '4',
    component: Capitals4PageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapitalsRoutingModule {}
