import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
import { LogoComponent } from './logo/logo.component';
import { EditTagComponent } from './edit-tag/edit-tag.component';
import { BottomComponent } from './bottom/bottom.component';

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
import { HeaderComponent } from './header/header.component';
import { AdsenseComponent } from './adsense/adsense.component';

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
    LogoComponent,
    EditTagComponent,
    BottomComponent,
    SignUpComponent,
    LoginComponent,
    ProfileComponent,
    HeaderComponent,
    AdsenseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
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
