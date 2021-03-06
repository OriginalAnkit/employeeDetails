import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonService } from '../common.service';
import { MatDialog } from '@angular/material';
import { EmployeeDetailDialogComponent } from '../employee-detail.dialog/employee-detail.dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  constructor(private apiSer: ApiService, private commonSer: CommonService, private dialog: MatDialog,private router:Router) { }
  employees = [];
  ngOnInit() {
    this.apiSer.getEmployees().then(
      (data: any) => {
        console.log(data)
        if (!data.error) {
          this.employees = data.data;
        } else {
          this.commonSer.openSnakBar("Something went wrong");
        }
      }
    ).catch(e => {
      this.commonSer.openSnakBar("Something went wrong");
    })
  }

  viewDetailsDialog(emp,edit,event) {
    if(edit){
      this.router.navigate(['/employee',emp._id]);
      return
    }
    event.stopPropagation();
    emp.edit=edit;
    this.dialog.open(EmployeeDetailDialogComponent, { data: emp ,width:'400px'})

  }
}
