import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { EditTagComponent } from './edit-tag/edit-tag.component';
import { ResultModule } from '../result/result.module';

@NgModule({
  imports: [
    CommonModule,
    ResultModule
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
