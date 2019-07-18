import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  addresses = [{}, {}]
  ngOnInit() {
  }

  onSubmit(f) {
    console.log(f,this.addresses)
  }

}
