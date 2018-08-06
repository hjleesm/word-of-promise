import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { WopMainModule } from './wop-main/wop-main.module';
import { ResultModule } from './result/result.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './search/search.component';
import { ViewTagsComponent } from './view-tags/view-tags.component';

// Custom SERVICE
import { SearchDataService } from './search-data.service';
import { PageService} from './page.service';
import { AccountService } from './account.service';

// Custom COMPONENT
import { ResultComponent } from './result/result.component';
import { WordComponent } from './word/word.component';
import { EditComponent } from './edit/edit.component';
import { TagComponent } from './tag/tag.component';
import { EditTagComponent } from './edit-tag/edit-tag.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatAutocompleteModule,
  MatSelectModule
} from '@angular/material';

import 'hammerjs';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchComponent,
    ViewTagsComponent,
    ResultComponent,
    WordComponent,
    EditComponent,
    TagComponent,
    EditTagComponent,
    SignUpComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    /* Angular Module */
    BrowserModule,
    FormsModule,
    HttpModule,
    /* App Module */
    WopMainModule,
    ResultModule,
    /* Angular Meterial Module */
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    MatSelectModule
  ],
  providers: [
    SearchDataService,
    PageService,
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
