import {DangkiComponent} from './client/dangki/dangki.component';
import {KhoitaothongtinComponent} from './client/khoitaothongtin/khoitaothongtin.component';
import {QuanlyhopthuComponent} from './client/HopThu-Component/quanlyhopthu/quanlyhopthu.component';
import {GuithuComponent} from './client/HopThu-Component/guithu/guithu.component';
import {XemthuComponent} from './client/HopThu-Component/xemthu/xemthu.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutAdminComponent} from './quantrivien/layout/layout-admin/layout-admin.component';
import {QuanLyThanhVienComponent} from './quantrivien/quanlythanhvien/quan-ly-thanh-vien/quan-ly-thanh-vien.component';
import {PhanHoiComponent} from './quantrivien/quanlythanhvien/phan-hoi/phan-hoi.component';
import {DanhSachHoiNhomComponent} from './quantrivien/quanlihoinhom/danh-sach-hoi-nhom/danh-sach-hoi-nhom.component';
import {ChiTietHoiNhomComponent} from './quantrivien/quanlihoinhom/chi-tiet-hoi-nhom/chi-tiet-hoi-nhom.component';
import {ThongTinCuaNhomComponent} from './quantrivien/quanlihoinhom/thong-tin-cua-nhom/thong-tin-cua-nhom.component';
import {DangThongBaoComponent} from './quantrivien/thong-bao/dang-thong-bao/dang-thong-bao.component';
import {SuabaidangComponent} from './quantrivien/quanlybaidang/suabaidang/suabaidang.component';
import {DanhsachbaidangComponent} from './quantrivien/quanlybaidang/danhsachbaidang/danhsachbaidang.component';
import {LoginAdminComponent} from './quantrivien/login-admin/login-admin/login-admin.component';
import {ListThongbaoComponent} from './quantrivien/thong-bao/list-thongbao/list-thongbao.component';
import {ThongtinchokhachComponent} from './client/XemThongTinWebsite/thongtinchokhach/thongtinchokhach.component';
import { HomeClientComponent } from './client/layout/home/home-client/home-client.component';
import { DangNhapComponent } from './client/login/dang-nhap/dang-nhap.component';
import { Error404Component } from './client/error404/error404.component';

const routes: Routes = [
  {path: '', component: HomeClientComponent},
  {
    path: 'loginAD',
    component: LoginAdminComponent
  },
  { path: 'login', component: DangNhapComponent},
  {path: 'register', component: DangkiComponent},
  {path: 'updateInfor', component: KhoitaothongtinComponent},
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      {path: '', component: QuanLyThanhVienComponent},
      {path: 'quan-ly-thanh-vien', component: QuanLyThanhVienComponent},
      {path: 'phan-hoi', component: PhanHoiComponent},
      {path: 'thong-bao/list', component: ListThongbaoComponent},
      {path: 'quan-ly-hoi-nhom', component: DanhSachHoiNhomComponent},
      {path: 'quan-ly-hoi-nhom/:id', component: ChiTietHoiNhomComponent},
      {
        path: 'quan-ly-hoi-nhom/thong-tin-nhom/:id',
        component: ThongTinCuaNhomComponent
      },
      {path: 'quan-ly-bai-dang', component: DanhsachbaidangComponent},
      {
        path: 'quan-ly-bai-dang/sua-bai-dang/:id',
        component: SuabaidangComponent
      },
      {path: 'dang-thong-bao', component: DangThongBaoComponent}
    ]
  },
  {
    path: 'listthu', component: QuanlyhopthuComponent
  }, {
    path: 'xemthu/:id', component: XemthuComponent
  },
  {
    path: 'thongtinchokhach', component: ThongtinchokhachComponent
  },
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
