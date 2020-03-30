import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { QuanlyhopthuComponent } from '../quanlyhopthu/quanlyhopthu.component';
import { Thu } from 'src/app/model/thu';
import { ActivatedRoute, Router } from '@angular/router';
import { ThuService } from './../../../service/thu/thu.service';
import { MAT_DIALOG_DATA } from "@angular/material";
@Component({
  selector: 'app-xemthu',
  templateUrl: './xemthu.component.html',
  styleUrls: ['./xemthu.component.scss']
})
export class XemthuComponent implements OnInit {
  thu: Thu;
  id: number;
  object: any;
  constructor(@Inject(MAT_DIALOG_DATA) data, public dialogRef: MatDialogRef<QuanlyhopthuComponent>, private router: Router, private route: ActivatedRoute, private thuService: ThuService) {
    this.id = data.id;
    this.object=data;
  }

  ngOnInit() {
    this.thuService.getThu(this.id).subscribe(data => {
      this.thu = data;
      console.log(data)
      console.log(this.thu);
      console.log(data.values);
    })
  }
  closeModal() {
    this.dialogRef.close();
    // window.onload()=function {

  }

  actionFunction() {
    alert("Trở về hộp thư thành công.");
    this.closeModal();
    // this.router.navigateByUrl("/listthu");
  }
}
