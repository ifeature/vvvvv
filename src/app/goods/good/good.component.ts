import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Good } from '../../models/good';

@Component({
  selector: 'app-good',
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.css']
})
export class GoodComponent {
  @Input() good: Good;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  view() {
    const link = ['/detail', this.good.id];
    this.router.navigate(link, { relativeTo: this.route });
  }

  addToCart() {
    console.log('add to cart');
  }
}
