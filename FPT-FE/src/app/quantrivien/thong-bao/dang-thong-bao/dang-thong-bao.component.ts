import { ThongBaoService } from './../../../service/thongbao/thongbao.service';
import { ThongBao } from './../../../model/thongbao';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dang-thong-bao',
  templateUrl: './dang-thong-bao.component.html',
  styleUrls: ['./dang-thong-bao.component.scss']
})
export class DangThongBaoComponent implements OnInit {
  thongbao: ThongBao = new ThongBao();
  thongbaoForm: FormGroup;

  constructor(
    private thongbaoService: ThongBaoService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.thongbaoForm = this.fb.group({
      tieuDe: [''],
      noiDung: ['']
    });
  }
  onSubmit(form) {

        // const { value } = this.thongbaoForm;
        // const data = {
        //     ...this.thongbao,
        //     ...value
        // };
        console.log(form.noiDung);
        console.log(this.thongbao.noiDung);
        this.thongbao.noiDung = form.noiDung;
        this.thongbao.tieuDe = form.tieuDe;
        this.thongbao.thoiGianThongBao = new Date();
        console.log(this.thongbao);
        this.thongbaoService.createThongBao(this.thongbao).subscribe(
            next => {
                this.router.navigate(['admin/thong-bao']);
            },
            error => console.log(error)
        );
}

}
