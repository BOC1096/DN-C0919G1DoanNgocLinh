import { Component, OnInit } from '@angular/core';
import { BaoCao } from 'src/app/model/baocao';
import { BaocaoService } from 'src/app/service/quanlythanhvien/baocao.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-phan-hoi',
  templateUrl: './phan-hoi.component.html',
  styleUrls: ['./phan-hoi.component.scss']
})
export class PhanHoiComponent implements OnInit {
  formRadio: FormGroup;
  isSearch = false;
  isError = false;
  size = 10;
  baocaopage: any;
  baocaos: BaoCao[] = [];
  totalPages = 1;
  pageClicked = 0;
  pages: [];
  xuly = 'all';
  start: Date;
  end: Date;
  constructor(private baocaoService: BaocaoService, private fb: FormBuilder) { }

  ngOnInit(
  ) {
    console.log(this.start);
    this.loadData(this.xuly, 0);
    this.formRadio = this.fb.group({
      isxuly: ['all']
    });
  }
  loadData(form, page) {
    console.log(form);
    this.xuly = form;
    this.baocaoService.getAll(page, this.size, this.xuly).subscribe(
      data => {
        this.pageClicked = page;
        this.baocaopage = data;
        this.baocaos = this.baocaopage.content;
        this.totalPages = this.baocaopage.totalPages;
        this.pages = Array.apply(null, { length: this.totalPages }).map(Number.call, Number);
        console.log(this.pages);
        console.log(page);
      }
    );
  }
  search(page) {
    this.baocaoService.search(page, this.size, this.xuly, this.start, this.end).subscribe(
      data => {
        this.isSearch = true;
        this.pageClicked = page;
        this.baocaopage = data;
        this.baocaos = this.baocaopage.content;
        console.log(this.baocaos);
        this.totalPages = this.baocaopage.totalPages;
        this.pages = Array.apply(null, { lenght: this.totalPages }).map(Number.call, Number);
      }
    );
  }
  onNext() {
    if (this.pageClicked < this.totalPages - 1) {
      this.pageClicked++;
      this.loadData(this.xuly, this.pageClicked);
    }
  }
  onPrevious() {
    if (this.pageClicked > 0) {
      this.pageClicked--;
      this.loadData(this.xuly, this.pageClicked);
    }
  }
  onFirst() {
    this.pageClicked = 0;
    this.loadData(this.xuly, this.pageClicked);
  }
  onLast() {
    this.pageClicked = this.totalPages - 1;
    this.loadData(this.xuly, this.pageClicked);
  }
  backToSearch() {
    this.end = null;
    this.start = null;
    this.isSearch = false;
    this.ngOnInit();
  }
}
