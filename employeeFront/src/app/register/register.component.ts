import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private apiSer: ApiService,private commonSer:CommonService,private router:Router) { }
  addresses = [{ type: 'permanent' }];
  phoneNumber = [{ type: 'Mobile' }];
  ngOnInit() {
  }
  addAnotherAddress() {
    this.addresses.push({ type: 'permanent' })
  }
  addAnotherPhone() {
    this.phoneNumber.push({ type: 'Mobile' })
  }
  deleteAddress(index) {
    if (this.addresses.length == 1) {
      return;
    }
    this.addresses.splice(index, 1)
  }
  deletePhone(index) {
    if (this.phoneNumber.length == 1) {
      return;
    }
    this.phoneNumber.splice(index, 1)
  }


  onSubmit(f) {
    console.log(f.value, this.addresses);
    f = f.value
    let empObj = {
      name: {
        firstName: f.firstName,
        lastName: f.lastName
      },
      email: f.email,
      password: f.password,
      address: this.addresses,
      phone: this.phoneNumber,
      designation:f.designation
    }

    console.log(empObj)
    this.apiSer.register(empObj).then(
      (r:any) => {
        if(r.error){
          this.commonSer.openSnakBar(r.msg)
        }else{
          this.commonSer.openSnakBar(r.msg)
          this.router.navigate(['/login'])
        }
      }
    ).catch(
      e=>{
        this.commonSer.openSnakBar("Something went wrong")
      }
    )
  }
}
