import { Component, ViewChild, DoCheck } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
  title = 'employeeFront';
  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;
  isLoggedIn=false;
  reason = '';
  constructor(){
   
  }
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  logoutClicked(){
    localStorage.clear()
  }
  ngDoCheck() {
    this.isLoggedIn=localStorage.getItem('token')?true:false;
    // console.log(this.isLoggedIn)
  }
}
