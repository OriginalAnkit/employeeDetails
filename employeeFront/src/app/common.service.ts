import { Injectable } from '@angular/core';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public snackBar: MatSnackBar) { }
  openSnakBar(message) {
    let config = new MatSnackBarConfig();
    config.verticalPosition = 'top';
    config.duration = 3000;
    config.horizontalPosition = "center"
    config.panelClass = ['snakbar-color']
    this.snackBar.open(message, 'ok', config);
  }

  savedataToLocalStorage(data,field){
   localStorage.setItem(field,btoa(data))
  }
}
