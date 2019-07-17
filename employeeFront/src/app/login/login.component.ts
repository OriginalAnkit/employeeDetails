import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private apiSer: ApiService, private commonSer: CommonService,private router:Router) { }

  ngOnInit() {
  }
  formSubmit(form) {
    this.apiSer.login(form.value).then(
      (res: any) => {
        console.log(res)
        if (res.error) {
          this.commonSer.openSnakBar(res.msg);
        } else {
          this.commonSer.openSnakBar(res.msg);
          this.commonSer.savedataToLocalStorage("bearer " +res.data.token,'token')
          this.router.navigate(['/employees']);

        }
      }
    ).catch(
      e=>{
        this.commonSer.openSnakBar('Something went wrong')
      }
    )
  }
}
