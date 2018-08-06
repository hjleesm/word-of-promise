import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoComponent } from './logo/logo.component';
import { HeaderComponent } from './header/header.component';
import { AdsenseComponent } from './adsense/adsense.component';
import { BottomComponent } from './bottom/bottom.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    AdsenseComponent,
    BottomComponent,
    LogoComponent
  ],
  exports: [
    HeaderComponent,
    AdsenseComponent,
    BottomComponent,
    LogoComponent
  ]
})
export class WopMainModule { }
