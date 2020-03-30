import { Component, OnInit } from '@angular/core';
import { HoiNhomService } from 'src/app/service/hoinhom/hoinhom.service';
import { BaidangService } from 'src/app/service/baidang/baidang.service';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NhomThanhVien } from 'src/app/model/nhomthanhvien';
import { HoiNhom } from 'src/app/model/hoinhom';
import { Baidang } from 'src/app/model/baidang';

@Component({
  selector: 'app-thong-tin-cua-nhom',
  templateUrl: './thong-tin-cua-nhom.component.html',
  styleUrls: ['./thong-tin-cua-nhom.component.scss']
})
export class ThongTinCuaNhomComponent implements OnInit {
  constructor(
    private hoiNhomService: HoiNhomService,
    private baiDangSerVice:BaidangService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    ) {}
    nhomThanhVien:NhomThanhVien;
    hoiNhom: HoiNhom;
    baiDang:Baidang;
    baiDangList:Baidang[]=[];
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.hoiNhomService.getHoiNhom(id).subscribe(
      next => {
        this.hoiNhom=next;
      },
    );
    this.hoiNhomService.getNhomThanhVien(id).subscribe(
      next => {
        this.nhomThanhVien=next;
      },
    );
    this.hoiNhomService.getNoiDung(id).subscribe(
      next => {
        this.baiDangList=next;
        console.log(next);
      },
    );
  }
  deleteNhomThanhVien(i) {
      this.hoiNhomService.deleteNhomThanhVien(i).subscribe(
        next => {
          this.router.navigate(["/admin/quan-ly-hoi-nhom"]);
        },
       );
  }
  canhBaoHoiNhom() {
       this.hoiNhom.soLanCanhCao++;
       this.hoiNhomService.updateSoLanCanhCao(this.hoiNhom).subscribe(
        next => {
          this.router.navigate(["/admin/quan-ly-hoi-nhom"]);
        },
       );
    }

}
