import { Component, OnInit } from '@angular/core';
import { ThongBaoService } from './../../../service/thongbao/thongbao.service';
import { ThongBao } from './../../../model/thongbao';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-list-thongbao',
  templateUrl: './list-thongbao.component.html',
  styleUrls: ['./list-thongbao.component.scss']
})
export class ListThongbaoComponent implements OnInit {
  thongbao: ThongBao;
  thongbaoForm: FormGroup;
  thongbaoList: ThongBao[] = [];
  id: number;

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
