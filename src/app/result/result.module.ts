import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from './result/result.component';
import { WopMainModule } from '../wop-main/wop-main.module';
import { WordComponent } from './word/word.component';
import { ResultRoutingModule } from './result-routing.module';

@NgModule({
  imports: [
    CommonModule,
    WopMainModule,
    ResultRoutingModule
  ],
  declarations: [
    ResultComponent,
    WordComponent
  ],
  exports: [
    ResultComponent,
    WordComponent
  ]
})
export class ResultModule { }
