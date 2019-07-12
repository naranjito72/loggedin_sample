import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatToolbarModule, MatIconModule, MatFormFieldModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    FlexLayoutModule
  ],
  exports: [MatSidenavModule, MatToolbarModule, MatIconModule, MatCardModule, MatFormFieldModule, FlexLayoutModule]
})
export class MaterialModule { }
