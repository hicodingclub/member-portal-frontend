import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthenticationModule } from '@hicoder/angular-auth';

import { AUTHENTICATION_AUTH_PAGE_ROOT_URI, AUTHENTICATION_SERVER_ROOT_URI, 
  AUTHENTICATION_INTERFACES, AUTHENTICATION_DROPDOWN_ITEMS, AUTHENTICATION_LOGIN_PIPELINE, AUTHENTICATION_REGISTRATION_PIPELINE } from '@hicoder/angular-auth';
import { authentication_page_root_uri, authentication_server_root_uri, 
  authentication_interfaces, authentication_dropdown_items, authentication_login_pipeline, authentication_registration_pipeline } from './injection-tokens/auth.conf';
import { FILE_UPLOAD_URI, FILE_DOWNLOAD_URI } from '@hicoder/angular-file';
import { file_upload_uri, file_download_uri } from './injection-tokens/file-upload.config';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactComponent } from './pages/contact/contact.component';

import { MembershipModule } from './membership/membership.module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthenticationModule,
    MembershipModule,
  ],
  providers: [
    { provide: AUTHENTICATION_AUTH_PAGE_ROOT_URI, useValue: authentication_page_root_uri },
    { provide: AUTHENTICATION_SERVER_ROOT_URI, useValue: authentication_server_root_uri },
    { provide: AUTHENTICATION_INTERFACES, useValue: authentication_interfaces },
    { provide: AUTHENTICATION_DROPDOWN_ITEMS, useValue: authentication_dropdown_items },
    { provide: AUTHENTICATION_LOGIN_PIPELINE, useValue: authentication_login_pipeline },
    { provide: AUTHENTICATION_REGISTRATION_PIPELINE, useValue: authentication_registration_pipeline },
    { provide: FILE_UPLOAD_URI, useValue: file_upload_uri },
    { provide: FILE_DOWNLOAD_URI, useValue: file_download_uri },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
