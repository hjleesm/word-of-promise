import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { WopMainModule } from './wop-main/wop-main.module';
import { ResultModule } from './result/result.module';
import { EditModule } from './edit/edit.module';
import { SignModule } from './sign/sign.module';
import { LoginModule } from './login/login.module';

import { AppComponent } from './app.component';

// Custom SERVICE
import { SearchDataService } from './search-data.service';
import { PageService} from './page.service';
import { AccountService } from './account.service';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
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
    PageService,
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
