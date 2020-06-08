import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RouteReuseStrategy } from '@angular/router';
import { MddsCoreModule, MddsRouteReuseStrategy } from '@hicoder/angular-core';

import { AuthenticationModule, AUTHENTICATION_DROPDOWN_ITEMS, AUTHENTICATION_LOGIN_PIPELINE } from '@hicoder/angular-auth';
import { AUTHENTICATION_AUTH_PAGE_ROOT_URI, AUTHENTICATION_SERVER_ROOT_URI, AUTHENTICATION_INTERFACES } from '@hicoder/angular-auth';
import { FILE_UPLOAD_URI, FILE_DOWNLOAD_URI, FILE_MANAGE_ROOT_URI } from '@hicoder/angular-file';

import { MDDS_ROUTE_REUSE_RUIs } from '@hicoder/angular-core';
import { route_reuse_uris } from './injection-tokens/reuse-strategy.conf';

import { UsersModule } from './users/users.module';

import { HomeModule } from './home/home.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  authentication_page_root_uri, authentication_server_root_uri, authentication_interfaces,
  authentication_dropdown_items, authentication_login_pipeline,
} from './injection-tokens/auth.conf';
import { file_upload_uri, file_download_uri, file_manage_root_uri } from './injection-tokens/file-upload.config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    AuthenticationModule,
    UsersModule,
    HomeModule,
  ],
  providers: [
    { provide: AUTHENTICATION_AUTH_PAGE_ROOT_URI, useValue: authentication_page_root_uri },
    { provide: AUTHENTICATION_SERVER_ROOT_URI, useValue: authentication_server_root_uri },
    { provide: AUTHENTICATION_INTERFACES, useValue: authentication_interfaces },
    { provide: AUTHENTICATION_DROPDOWN_ITEMS, useValue: authentication_dropdown_items },
    { provide: AUTHENTICATION_LOGIN_PIPELINE, useValue: authentication_login_pipeline },
    { provide: FILE_UPLOAD_URI, useValue: file_upload_uri },
    { provide: FILE_DOWNLOAD_URI, useValue: file_download_uri },
    { provide: FILE_MANAGE_ROOT_URI, useValue: file_manage_root_uri },
    { provide: MDDS_ROUTE_REUSE_RUIs, useValue: route_reuse_uris },
    { provide: RouteReuseStrategy, useClass: MddsRouteReuseStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
