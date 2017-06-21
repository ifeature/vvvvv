import { TestBed, inject } from '@angular/core/testing';

import { GoodsArrayService } from './goods-array.service';

describe('GoodsArrayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoodsArrayService]
    });
  });

  it('should be created', inject([GoodsArrayService], (service: GoodsArrayService) => {
    expect(service).toBeTruthy();
  }));
});
