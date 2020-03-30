import { Component, OnInit } from '@angular/core';
import { QuanlyhopthuComponent } from './../quanlyhopthu/quanlyhopthu.component';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ThuService } from './../../../service/thu/thu.service';
import { Router } from '@angular/router';
import { ThanhvienService } from 'src/app/service/thanhvien/thanhvien.service';
import { Thanhvien } from './../../../model/thanhvien';

@Component({
  selector: 'app-guithu',
  templateUrl: './guithu.component.html',
  styleUrls: ['./guithu.component.scss']
})
export class GuithuComponent implements OnInit {
  Contact:FormGroup;
  thu:any[];
  today=Date.now();
  thanhVien:Thanhvien[]=[];
  constructor(public dialogRef: MatDialogRef<QuanlyhopthuComponent>,private fb:FormBuilder,
     private thuService: ThuService, private router:Router,private thanhVienService:ThanhvienService) { }

  ngOnInit() {
    this.thanhVienService.getThanhvienList().subscribe(data=>{
      this.thanhVien=data;
      console.log(this.thanhVien);
    })
    this.Contact=this.fb.group({
      idThu:[''],
      tieuDe:['',[Validators.required,Validators.maxLength(30)]],
      noiDung:['',[Validators.required,Validators.maxLength(500)]],
      thoiGianGui:[''],
      thanhVienGui:[''],
      thanhVienNhan:['',[Validators.required]],
    })
  }

  addNewThu(){
    alert(this.today)
    if(this.Contact.valid){
      this.Contact.value.thoiGianGui=this.today;
      this.thuService.createThu(this.Contact.value).subscribe(data=>{
        this.router.navigateByUrl("/listthu")
      });
    }
  }

  closeModal() {
    this.dialogRef.close();
  }

  actionFunction() {
    alert("Thư đã gửi.");
    this.closeModal();
  }
}
