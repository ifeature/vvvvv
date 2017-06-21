import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoodsComponent, GoodsListComponent, GoodDetailComponent } from '.';
import { CanDeactivateGuard } from '../guards/can-deactivate.guard';
import { GoodResolveGuard } from '../guards/good-resolve.guard';

const routes: Routes = [
  {
    path: '',
    component: GoodsComponent,
    children: [
      {
        path: '',
        component: GoodsListComponent
      }
    ]
  },
  {
    path: 'detail/:id',
    component: GoodDetailComponent,
    canDeactivate: [CanDeactivateGuard],
    resolve: {
      good: GoodResolveGuard
    }
  }
];

const routesModule: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
  imports: [
    routesModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    GoodResolveGuard,
    CanDeactivateGuard
  ]
})
export class GoodsRoutingModule { }
