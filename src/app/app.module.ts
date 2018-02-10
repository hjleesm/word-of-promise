import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './search/search.component';
import { ViewTagsComponent } from './view-tags/view-tags.component';

// Custom SERVICE
import { SearchDataService } from './search-data.service';
import { PageService} from './page.service';

// Custom COMPONENT
import { ResultComponent } from './result/result.component';
import { WordComponent } from './word/word.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchComponent,
    ViewTagsComponent,
    ResultComponent,
    WordComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SearchDataService, PageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
