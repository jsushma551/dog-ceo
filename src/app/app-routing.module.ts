import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'breeds-list',
    pathMatch: 'full'
  },
  {
    path: 'breeds-list',
    loadChildren: () => import('./breeds-list/breeds-list.module').then(m => m.BreedsListModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
