import {Component, OnInit, Input} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {GuithuComponent} from './../guithu/guithu.component';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {XemthuComponent} from './../xemthu/xemthu.component';
import {Router} from '@angular/router';
import {Thu} from 'src/app/model/thu';
import {ThuService} from '../../../service/thu/thu.service';

@Component({
  selector: 'app-quanlyhopthu',
  templateUrl: './quanlyhopthu.component.html',
  styleUrls: ['./quanlyhopthu.component.scss']
})
export class QuanlyhopthuComponent implements OnInit {
  thu: Thu[] = [];
  p: number = 1;

  constructor(public matDialog: MatDialog, private thuService: ThuService, private router: Router,) {

  }

  ngOnInit() {
    this.thuService.getAllThu().subscribe(data => {
      this.thu = data;
      console.log(this.thu);
    });
  }

  hopthu() {
    this.thuService.getAllThu().subscribe(data => {
      this.thu = data;
      this.router.navigateByUrl('/listthu');
    });
  }

  openGuiThu() {
    
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;  
    dialogConfig.id = 'modal-component';
    dialogConfig.height = '500px';
    dialogConfig.width = '500px';
    const modalDialog = this.matDialog.open(GuithuComponent, dialogConfig);
  }

  xemthu(id: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      id: id
    };
    dialogConfig.disableClose = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = '90%';
    dialogConfig.width = '50%';
    const modalDialog = this.matDialog.open(XemthuComponent, dialogConfig);
    // const modalDialog = this.matDialog.open(XemthuComponent, {
    //   data: { id: id }, width: '350px',
    // });
    modalDialog.afterClosed().subscribe(result => {
      this.thuService.getAllThu().subscribe(data => {
        this.ngOnInit();

      });

    });
  }

  deleteThu = function(id: number) {
    if (confirm('Bạn có muốn xóa không!')) {
      this.thuService.deleteThu(id).subscribe(data =>
        this.thuService.getAllThu().subscribe(data => {
          this.thu = data;
        })
      );
    }
  };
}

export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {
  }
}

export class NgbdModalComponent {
  constructor(private modalService: NgbModal) {
  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }
}
