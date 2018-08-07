import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { WopMainModule } from './wop-main/wop-main.module';
import { ResultModule } from './result/result.module';
import { EditModule } from './edit/edit.module';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatAutocompleteModule,
  MatSelectModule
} from '@angular/material';

// Custom SERVICE
import { SearchDataService } from './search-data.service';
import { PageService} from './page.service';
import { AccountService } from './account.service';

import 'hammerjs';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    /* Angular Module */
    BrowserModule,
    HttpModule,
    /* App Module */
    WopMainModule,
    ResultModule,
    EditModule,
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
