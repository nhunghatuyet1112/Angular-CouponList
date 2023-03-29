import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuContent: string[] = ['CẤU HÌNH', 'MUA HÀNG', 'KHO HÀNG', 'ĐIỀU PHỐI', 'MARKETING', 'E-COMMERCE', 'KINH DOANH', 'NHÂN SỰ', 'BÁO CÁO']
}
