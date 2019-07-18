import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonService } from '../common.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  addresses = [{ type: 'permanent' }];
  phoneNumber = [{ type: 'Mobile' }];
  addMode = false;
  editMode = false;

  firstName = null;
  lastName = null;
  email = null;
  designation = null;
  copassword = null;
  password = null;
  userId = null;
  constructor(private apiSer: ApiService, private commonSer: CommonService, private router: Router, private route: ActivatedRoute) {
    if (router.url == '/addEmployee') {
      this.addMode = true
    } else if (router.url.includes('/employee/')) {
      this.editMode = true;
      this.route.params.subscribe(
        param => {
          // console.log(param.id)
          this.userId = param.id;
          this.apiSer.getEmployeeById(param.id).then(
            (user: any) => {
              console.log(user)
              this.phoneNumber = user.phone;
              this.addresses = user.address;
              this.firstName = user.name.firstName;
              this.lastName = user.name.lastName;
              this.email = user.email;
              this.designation = user.designation;

            }
          )
        }
      )
    }
  }
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
      designation: f.designation
    }

    console.log(empObj)
    this.apiSer.register(empObj).then(
      (r: any) => {
        if (r.error) {
          this.commonSer.openSnakBar(r.msg)
        } else {
          this.commonSer.openSnakBar(r.msg)
          this.router.navigate(['/login'])
        }
      }
    ).catch(
      e => {
        this.commonSer.openSnakBar("Something went wrong")
      }
    )
  }

  updateDetails() {
    let empObj = {
      name: {
        firstName: this.firstName,
        lastName: this.lastName
      },
      email: this.email,
      address: this.addresses,
      phone: this.phoneNumber,
      designation: this.designation
    }
    this.apiSer.updateUserDetails(this.userId, empObj).then(
      (data: any) => {
        if (data.error) {
          this.commonSer.openSnakBar(data.msg);
          return
        }
        this.commonSer.openSnakBar(data.msg);
        this.router.navigate(['/employees'])
      }
    ).catch(
      e=>{
        this.commonSer.openSnakBar('Something went wrong')
      }
    )
  }
}
