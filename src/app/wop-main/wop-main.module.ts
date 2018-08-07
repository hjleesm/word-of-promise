import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainComponent } from './main/main.component';
import { LogoComponent } from './logo/logo.component';
import { HeaderComponent } from './header/header.component';
import { AdsenseComponent } from './adsense/adsense.component';
import { BottomComponent } from './bottom/bottom.component';
import { SearchComponent } from './search/search.component';
import { ViewTagsComponent } from './view-tags/view-tags.component';
import { TagComponent } from './tag/tag.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    HeaderComponent,
    AdsenseComponent,
    BottomComponent,
    LogoComponent,
    MainComponent,
    SearchComponent,
    ViewTagsComponent,
    TagComponent
  ],
  exports: [
    HeaderComponent,
    AdsenseComponent,
    BottomComponent,
    LogoComponent,
    MainComponent,
    SearchComponent,
    ViewTagsComponent,
    TagComponent
  ]
})
export class WopMainModule { }
