import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatTableModule,
  MatSnackBarModule,
  MatPaginatorModule
} from '@angular/material';

const MaterialComponents = [
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatTableModule,
  MatSnackBarModule,
  MatPaginatorModule
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
