import { Component, OnInit, AfterViewInit } from '@angular/core';
import { coupon } from '../coupon';
import { CouponService } from '../coupon.service';
import { ViewEncapsulation } from '@angular/core';


import * as $ from 'jquery'


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  public coupons: coupon[] = [];
  public filterCoupons: coupon[] = [];
  public selectedCoupon?: coupon;
  public checkedVoucher = false;
  public checkedCoupon = false;
  public pageSize = 5;
  public buttonCount = 2;
  public sizes = [10, 20, 50];

  constructor(public couponService: CouponService) { }

  getCoupons(): void {
    this.couponService.getCoupons()
      .subscribe(coupons => this.coupons = coupons);
  }

  ngOnInit(): void {
    this.getCoupons();
    this.Paging();
  }

  Paging(): void {
    $(document).ready(
      () => {
        $('.page-sizes kendo-label').text('Hiển thị mỗi trang');
        $('.page-sizes').css({ 'float': 'left', 'font-weight': '700', 'font-size': '13px', 'line-height': '16px', 'color': '#959DB3', 'margin-top': '5px' });
        $('.page-sizes .k-dropdown .k-input-inner').css({ 'font-weight': '400', 'font-size': '13px', 'line-height': '16px', 'color': '#26282E' })
        $('.page-sizes .k-dropdown').css({ 'border-style': 'none', 'background-color': '#EDEFF3' });
        $('.k-pager-first').text('Đầu');
        $('.k-pager-first').css({ 'color': '#959DB3' });
        $('kendo-dropdownlist').removeClass("k-picker-solid");
        $('.k-input-button').empty();
        var btn = '<i class="fa-solid fa-angle-down"></i>';
        $('.k-input-button').append(btn);
        $(".prev-btn .k-pager-first").addClass('k-pager-first-text');
        $(".k-pager-first-text").removeClass('k-pager-nav');
        $(".prev-btn .k-pager-first-text").attr("style", "background-color:#F4F5F7!important");
        $(".prev-btn .k-pager-first-text").css({ 'border-radius': '5px' })
        $(".prev-btn .k-pager-nav").empty();
        var prevBtn = '<i class="fa-solid fa-chevron-left"></i>';
        $(".prev-btn .k-pager-nav").append(prevBtn);
        $(".prev-btn .k-pager-nav").attr("style", "background-color:#F4F5F7!important");
        $(".prev-btn .k-pager-nav").css({ 'height': '29px', 'width': '20px', 'margin': '0px 10px 0px 10px', 'border-radius': '3px' })
        $(".prev-btn .k-pager-nav i").attr("style", "background-color:#F4F5F7!important");
        $('.k-dropdown').click(() => {
          $('.k-list-md .k-list-content .k-list-ul .k-selected').css('background-color', '#008000');
        })

        $('.k-pager-numbers .k-selected').attr("style", "background-color:#959DB3!important");
        $('.k-pager-numbers .k-selected').css({ 'color': '#FFFFFF', 'border-radius': '5px', 'padding': '0', 'min-width': 'calc(1.4285714286em + 1px)' });
        $('.k-pager-last').text('Cuối');
        $(".k-pager-last").attr("style", "background-color:#FFFFFF!important");
        $('.k-pager-last').css({ 'color': '#959DB3', 'font-weight': '400', 'border-radius': '5px' });
        $('.next-btn :first-child').empty();
        var nextBtn = '<i class="fa-solid fa-chevron-right"></i>';
        $('.next-btn :first-child').append(nextBtn);
        $(".next-btn :first-child").attr("style", "background-color:#FFFFFF!important");
        $(".next-btn :first-child").css({ 'height': '29px', 'width': '20px', 'margin': '0px 10px 0px 5px', 'border-radius': '3px' })
        $(".next-btn :first-child i").attr("style", "background-color:#FFFFFF!important");
        $(".next-btn :first-child i").css('color', '#959DB3');
      }
    )
  }

  log(id: number): void {
    this.couponService.log(id);
  }

  addButton(): void {
    this.couponService.addButton();
  }

  searchFilter(value: string): void {
    this.couponService.searchCoupons(value)
      .subscribe(coupons => this.coupons = coupons);
  }

  onChangeVoucher(checked: boolean): void {
    if (checked == true) {
      this.searchFilter('Voucher')
    }
    else {
      this.getCoupons();
    }
  }

  onChangeCoupon(checked: boolean): void {
    if (checked == true) {
      this.searchFilter('Coupon')
    }
    else {
      this.getCoupons();
    }
  }


}
