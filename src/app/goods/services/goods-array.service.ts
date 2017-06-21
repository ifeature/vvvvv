import { Injectable } from '@angular/core';

import { Good } from '../../models/good';

const goodsList = [
  new Good(1, 'Good title #1', 'Good description #1', 'Category #1', 100, true, []),
  new Good(2, 'Good title #2', 'Good description #2', 'Category #2', 200, true, []),
  new Good(3, 'Good title #3', 'Good description #3', 'Category #3', 300, true, []),
  new Good(4, 'Good title #4', 'Good description #4', 'Category #1', 400, true, []),
  new Good(5, 'Good title #5', 'Good description #5', 'Category #2', 500, true, []),
  new Good(6, 'Good title #6', 'Good description #6', 'Category #3', 600, false, []),
  new Good(7, 'Good title #7', 'Good description #7', 'Category #1', 700, false, [])
];

const goodsListPromise = Promise.resolve(goodsList);

@Injectable()
export class GoodsArrayService {
  getGoods(): Promise<Good[]> {
    return goodsListPromise;
  }

  getGood(id: number | string): Promise<Good> {
    return this.getGoods()
      .then(goods => goods.find(good => good.id === +id))
      .catch(() => Promise.reject('Error in getGoods method'));
  }

  addGood(good: Good): void {
    goodsList.push(good);
  }

  updateGood(good: Good): void {
    let i = -1;

    goodsList.forEach((item, index) => {
      if (item.id === good.id ) {
        i = index;
        return false;
      }
    });

    if (i > -1) {
      goodsList.splice(i, 1, good);
    }
  }
}
