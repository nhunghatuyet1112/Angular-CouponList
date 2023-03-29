import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { coupon } from './coupon';
import { COUPON } from './mock-coupons';

@Injectable({
  providedIn: 'root'
})
export class CouponService {
  constructor() { }

  getCoupons(): Observable<coupon[]> {
    const coupons = of(COUPON);
    return coupons;
  }

  searchCoupons(value: string): Observable<coupon[]> {
    if (value.trim() == '') {
      const coupons = of(COUPON);
      return coupons;
    }
    else {
      const coupons = COUPON.filter(c => c.phanNhom.phanNhomCha === value);
      return of(coupons)
    }
  }

  log(id: number): any {
    console.log(COUPON[id - 1]);
  }

  addButton(): void {
    alert('Success');
  }
}
