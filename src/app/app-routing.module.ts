import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ConfigComponent } from './config/config.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },
  {
    path: 'flags',
    loadChildren: () =>
      import('./flags/flags.module').then((m) => m.FlagsModule),
  },
  {
    path: 'capitals',
    loadChildren: () =>
      import('./capitals/capitals.module').then((m) => m.CapitalsModule),
  },
  {
    path: 'config',
    component: ConfigComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
