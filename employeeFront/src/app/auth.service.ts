import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private commonSer:CommonService,private router:Router) { }
  canActivate() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      this.commonSer.openSnakBar('You have to login first');
      this.router.navigate(['/login'])
      return false;
    }
  }
}
