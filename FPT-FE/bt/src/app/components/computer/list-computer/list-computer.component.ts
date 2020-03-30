import { Component, OnInit } from '@angular/core';
import { Computer } from 'src/app/model/computer';
import { ComputerService } from 'src/app/service/computer.service';

@Component({
  selector: 'app-list-computer',
  templateUrl: './list-computer.component.html',
  styleUrls: ['./list-computer.component.css']
})
export class ListComputerComponent implements OnInit {
  computers: Array<Computer> = new Array();

  constructor(private service: ComputerService) { }

  ngOnInit() {
    this.getListComputer();
  }

  getListComputer() {
    this.service.getAllService().toPromise().then(
      data => {
        this.computers = data;
        console.log(data);
      }
    );
  }
}
