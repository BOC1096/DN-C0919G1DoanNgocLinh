import { Component, OnInit } from '@angular/core';
import { HoiNhom } from 'src/app/model/hoinhom';
import { HoiNhomService } from "./../../../service/hoinhom/hoinhom.service";

@Component({
  selector: 'app-danh-sach-hoi-nhom',
  templateUrl: './danh-sach-hoi-nhom.component.html',
  styleUrls: ['./danh-sach-hoi-nhom.component.scss']
})
export class DanhSachHoiNhomComponent implements OnInit {

  hoiNhom: HoiNhom;
  hoiNhomList: HoiNhom[] = [];
  constructor(private hoiNhomService: HoiNhomService) {}
  p = 1;
  ngOnInit() {
    this.hoiNhomService.getAllHoiNhom().subscribe(data => {
      this.hoiNhomList = data;
    });
  }

}
