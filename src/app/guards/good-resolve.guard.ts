import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Good } from '../models/good';
import { GoodsArrayService } from '../goods/services/goods-array.service';

@Injectable()
export class GoodResolveGuard implements Resolve<Good> {

  constructor(
    private goodsArrayService: GoodsArrayService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot): Promise<Good> {
    const id = +route.params['id'];

    return this.goodsArrayService.getGood(id).then(good => {
      if (good) {
        return good;
      } else { // id not found
        this.router.navigate(['/home']);
        return null;
      }
    });
  }
}
