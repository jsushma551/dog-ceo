import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreedsListComponent } from './breeds-list.component';

const routes: Routes = [
  {
    path: '',
    component: BreedsListComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule,
    RouterModule.forChild(routes)
  ]
})
export class BreedsListRoutingModule { }
