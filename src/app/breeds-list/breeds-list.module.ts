import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreedsListRoutingModule } from './breeds-list-routing.module';
import { BreedsListComponent } from './breeds-list.component';

@NgModule({
  declarations: [
    BreedsListComponent
  ],
  imports: [
    CommonModule,
    BreedsListRoutingModule
  ]
})
export class BreedsListModule { }
