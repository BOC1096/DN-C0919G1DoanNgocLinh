import { Component, OnInit } from '@angular/core';
import { QlThanhVien } from 'src/app/model/qlThanhVien';
import { QuanlythanhvienService } from 'src/app/service/quanlythanhvien/quanlythanhvien.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-quan-ly-thanh-vien',
  templateUrl: './quan-ly-thanh-vien.component.html',
  styleUrls: ['./quan-ly-thanh-vien.component.scss']
})
export class QuanLyThanhVienComponent implements OnInit {
  isSearch = false;
  thanhvien: QlThanhVien = new QlThanhVien();
  formRadio: FormGroup;
  size = 5;
  thanhVienPage: any;
  thanhViens: QlThanhVien[] = [];
  totalPages = 1;
  pageClicked = 0;
  pages: number[];
  search = '';
  vip = 'all';
  isError = false;
  constructor(private thanhVienService: QuanlythanhvienService, private fb: FormBuilder) { }

  ngOnInit() {
    this.onSubmit(this.vip, 0);
    this.formRadio = this.fb.group({
      isVip: ['all']
    });
  }
  changeVip(id: number) {
    this.thanhVienService.getThanhVien(id).subscribe(
      data => {
        this.thanhvien = data;
        this.thanhvien.vip = !this.thanhvien.vip;
        this.thanhVienService.changeVip(this.thanhvien).subscribe(
          data1 => console.log(this.thanhvien.vip)
        );
      });
  }
  onSubmit(form, page) {
    this.vip = form;
    console.log(this.totalPages);
    this.thanhVienService.getAll(this.vip, page, this.size, this.search).subscribe(
      data => {
        this.pageClicked = page;
        this.thanhVienPage = data;
        if (this.thanhViens.length === 0) {
          this.isError = true;
        }
        this.thanhViens = this.thanhVienPage.content;
        if (this.thanhViens.length === 0) {
          this.onPrevious();
          this.isError = true;
        }
        if (this.thanhViens.length !== 0) {
          this.isError = false;
        }
        console.log(this.thanhViens);
        this.totalPages = this.thanhVienPage.totalPages;
        this.pages = Array.apply(null, { length: this.totalPages }).map(Number.call, Number);
      }, errors => {
        // window.alert(errors.status);
        console.log(errors);
      }
    );
  }
  onNext() {
    if (this.pageClicked < this.totalPages - 1) {
      this.pageClicked++;
      this.onSubmit(this.vip, this.pageClicked);
    }
  }
  onPrevious() {
    if (this.pageClicked > 0) {
      this.pageClicked--;
      this.onSubmit(this.vip, this.pageClicked);
    }
  }
  onFirst() {
    this.pageClicked = 0;
    this.onSubmit(this.vip, this.pageClicked);
  }
  onLast() {
    this.pageClicked = this.totalPages - 1;
    this.onSubmit(this.vip, this.pageClicked);
  }
  searchName() {
    if (this.search === '') {
      this.isSearch = false;
      this.ngOnInit();
    } else {
      this.isSearch = true;
      this.onSubmit(this.vip, 0);
    }
  }
  backToSearch() {
    this.search = '';
    this.isSearch = false;
    this.ngOnInit();
  }
}

