import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { EditTagComponent } from './edit-tag/edit-tag.component';
import { ResultModule } from '../result/result.module';
import { FormsModule } from '@angular/forms';
import { EditRoutingModule } from './edit-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatAutocompleteModule,
  MatSelectModule
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    ResultModule,
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
    EditRoutingModule
  ],
  declarations: [
    EditComponent,
    EditTagComponent
  ],
  exports: [
    EditComponent,
    EditTagComponent
  ]
})
export class EditModule { }
