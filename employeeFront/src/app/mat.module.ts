import { MatButtonModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatNavList, MatListModule, MatCardModule, MatFormFieldModule, MatFormFieldControl, MatInputModule, MatSnackBarModule, MatSelectModule, MatTableModule, MatDialogModule } from '@angular/material';
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
    MatSnackBarModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule]
@NgModule({
    imports: [...mod],
    exports: [...mod],
})
export class MatModule { }