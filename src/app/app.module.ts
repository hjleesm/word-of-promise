import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './search/search.component';
import { ViewTagsComponent } from './view-tags/view-tags.component';

import { SearchDataService } from './search-data.service';
import { ResultComponent } from './result/result.component';
import { WordComponent } from './word/word.component';

import { RoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchComponent,
    ViewTagsComponent,
    ResultComponent,
    WordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule
  ],
  providers: [SearchDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
