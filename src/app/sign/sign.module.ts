import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SignUpComponent } from './sign-up/sign-up.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatAutocompleteModule,
  MatSelectModule
} from '@angular/material';
import { SignRoutingModule } from './sign-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    /* Angular Meterial Module */
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    MatSelectModule,
    SignRoutingModule
  ],
  declarations: [SignUpComponent],
  exports: [SignUpComponent]
})
export class SignModule { }
