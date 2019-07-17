import { MatButtonModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatNavList, MatListModule, MatCardModule, MatFormFieldModule, MatFormFieldControl, MatInputModule, MatSnackBarModule } from '@angular/material';
import { NgModule } from '@angular/core';

const mod = [
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule]
@NgModule({
    imports: [...mod],
    exports: [...mod],
})
export class MatModule { }