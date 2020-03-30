import { ListThongbaoComponent } from './../list-thongbao/list-thongbao.component';
import { Component, OnInit, Input } from '@angular/core';
import { ThongBao } from 'src/app/model/thongbao';
import { FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ThongBaoService } from 'src/app/service/thongbao/thongbao.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-thongbao-detal',
  templateUrl: './thongbao-detal.component.html',
  styleUrls: ['./thongbao-detal.component.scss']
})
export class ThongbaoDetalComponent implements OnInit {
  thongbao: ThongBao;
  tbForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private tbService: ThongBaoService,
    private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this.activatedRouter.snapshot.paramMap.get('id');
    this.tbService.getThongBao(id).subscribe(
      next => (this.thongbao = next),
      error => {
          console.log(error);
          this.thongbao = null;
      }
  );
  }

}
