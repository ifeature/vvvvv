import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GoodsArrayService, GoodsListComponent, GoodComponent, GoodDetailComponent } from '.';
import { GoodsRoutingModule } from './goods-routing.module';
import { GoodsComponent } from './goods.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GoodsRoutingModule
  ],
  declarations: [GoodsListComponent, GoodComponent, GoodDetailComponent, GoodsComponent],
  providers: [
    GoodsArrayService
  ]
})
export class GoodsModule { }
