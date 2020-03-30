import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-danhsachbaidang',
  templateUrl: './danhsachbaidang.component.html',
  styleUrls: ['./danhsachbaidang.component.scss']
})
export class DanhsachbaidangComponent implements OnInit {
p = 0;
  constructor( private router: Router) { }

  ngOnInit() {
  }
  gotoEdit() {
    this.router.navigateByUrl('/Xem-BaiDang/');
  }
  gotoCreate() {
    this.router.navigateByUrl('/app-BaiDang/');
  }
}
