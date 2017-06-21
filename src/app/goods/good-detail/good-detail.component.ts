import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Good } from '../../models/good';
import { GoodsArrayService } from '../services/goods-array.service';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-good-detail',
  templateUrl: './good-detail.component.html',
  styleUrls: ['./good-detail.component.css']
})
export class GoodDetailComponent implements OnInit {
  public good: Good;
  public comment: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private goodsArrayService: GoodsArrayService,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.good = new Good(null, '', '', '', null, false, []);

    // this.route.params
    //   .switchMap((params: Params) => this.goodsArrayService.getGood(+params['id']))
    //   .subscribe(
    //     good => this.good = Object.assign({}, good),
    //     err => console.log(err)
    //   );

    this.route.data.forEach((data: { good: Good }) => {
      this.good = Object.assign({}, data.good);
    });
  }

  addToCart() {
    console.log('add to cart');
  }

  addComment() {
    const comments = this.good.comments;
    comments.push(this.comment);

    const good = new Good(
      this.good.id,
      this.good.title,
      this.good.description,
      this.good.category,
      this.good.price,
      this.good.available,
      comments
    );

    if (good.id) {
      this.goodsArrayService.updateGood(good);
      this.router.navigate(['/home', { id: good.id }]);
    } else {
      this.goodsArrayService.addGood(good);
      this.router.navigate(['/home']);
    }
  }

  goBack() {
    this.router.navigate(['/home']);
  }

  canDeactivate(): Promise<boolean> | boolean {
    if (this.comment) {
      return this.dialogService.confirm('Discard changes?');
    }
    return true;
  }
}
