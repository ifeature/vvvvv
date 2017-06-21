import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Good } from '../../models/good';
import { GoodsArrayService } from '../services/goods-array.service';

import 'rxjs/add/operator/switchMap';

@Component({
  templateUrl: 'goods-list.component.html',
  styleUrls: ['goods-list.component.css']
})
export class GoodsListComponent implements OnInit {
  public goods: Array<Good>;
  private editedGood: Good;

  constructor(
    private goodsArrayService: GoodsArrayService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.goodsArrayService.getGoods()
      .then(goods => this.goods = goods)
      .catch((err) => console.log(err));

    this.route.params
      .switchMap((params: Params) => this.goodsArrayService.getGood(params['id']))
      .subscribe(
        (good: Good) => this.editedGood = Object.assign({}, good),
        (err) => console.log(err)
      );
  }

  isEdited(good: Good) {
    if (this.editedGood) {
      return good.id === this.editedGood.id;
    }
    return false;
  }
}
