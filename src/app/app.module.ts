import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { WopMainModule } from './wop-main/wop-main.module';
import { ResultModule } from './result/result.module';
import { EditModule } from './edit/edit.module';
import { SignModule } from './sign/sign.module';
import { LoginModule } from './login/login.module';

import { AppComponent } from './app.component';

// Custom SERVICE
import { SearchDataService } from './search-data.service';
import { AccountService } from './account.service';

import 'hammerjs';

const routes: Routes = [{ path: '', component: AppComponent }];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    /* Angular Module */
    BrowserModule,
    HttpModule,
    /* App Module */
    WopMainModule,
    ResultModule,
    EditModule,
    SignModule,
    LoginModule
  ],
  providers: [
    SearchDataService,
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
