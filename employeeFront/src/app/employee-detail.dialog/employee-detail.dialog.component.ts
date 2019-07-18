import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-employee-detail.dialog',
  templateUrl: './employee-detail.dialog.component.html',
  styleUrls: ['./employee-detail.dialog.component.scss']
})
export class EmployeeDetailDialogComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any) { 
    console.log(data)
  }

  ngOnInit() {
  }

}
