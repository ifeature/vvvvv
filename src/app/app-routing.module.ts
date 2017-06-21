import { RouterModule, Routes } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { LoginComponent, AboutComponent, PageNotFoundComponent } from './components';
import { AuthGuard } from './guards/auth.guard';
import { CustomPreloadingStrategyService } from './services';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'About'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login'
    }
  },
  {
    path: 'admin',
    canLoad: [AuthGuard],
    loadChildren: 'app/admin/admin.module#AdminModule',
    data: { title: 'Admin' }
  },
  {
    path: 'home',
    loadChildren: 'app/goods/goods.module#GoodsModule',
    data: {
      title: 'Goods',
      preload: true
    }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

const routesModule: ModuleWithProviders = RouterModule
  .forRoot(routes, { useHash: false, preloadingStrategy: CustomPreloadingStrategyService });

export const appRouterComponents = [ LoginComponent, AboutComponent, PageNotFoundComponent ];

@NgModule({
  imports: [routesModule],
  exports: [RouterModule],
  providers: [
    CustomPreloadingStrategyService
  ]
})
export class AppRoutingModule { }


