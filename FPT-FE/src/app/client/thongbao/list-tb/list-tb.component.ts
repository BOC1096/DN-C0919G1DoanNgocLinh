import { Component, OnInit } from '@angular/core';
import { ThongBao } from 'src/app/model/thongbao';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ThongBaoService } from 'src/app/service/thongbao/thongbao.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-tb',
  templateUrl: './list-tb.component.html',
  styleUrls: ['./list-tb.component.scss']
})
export class ListTbComponent implements OnInit {
  thongbao: ThongBao;
  thongbaoForm: FormGroup;
  thongbaoList: ThongBao[] = [];

  constructor(
    private thongbaoService: ThongBaoService,
    private fb: FormBuilder,
    private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.thongbaoService.getAllThongBao().subscribe(
      next => (this.thongbaoList = next),
      error => (this.thongbaoList = [])
    );
  }

}
