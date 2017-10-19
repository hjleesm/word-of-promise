import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './search/search.component';
import { ViewTagsComponent } from './view-tags/view-tags.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchComponent,
    ViewTagsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
