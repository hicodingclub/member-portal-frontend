import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { RouteReuseStrategy } from "@angular/router";
import { MddsCoreModule, MddsRouteReuseStrategy } from "@hicoder/angular-core";

import { AuthenticationModule } from "@hicoder/angular-auth";

import {
  AUTHENTICATION_LOGIN_PIPELINE,
  AUTHENTICATION_INTERFACES,
  AUTHENTICATION_REGISTRATION_REQUIRED,
  AUTHENTICATION_REGISTRATION_PIPELINE,
  AUTHENTICATION_DROPDOWN_ITEMS,
} from "@hicoder/angular-auth";
import {
  authentication_interfaces,
  authentication_login_pipeline,
  authentication_registration_pipeline,
  authentication_reg_required,
  authentication_dropdown_items,
} from "./injection-tokens/auth.conf";

import { MDDS_ROUTE_REUSE_RUIs } from '@hicoder/angular-core';
import { route_reuse_uris } from './injection-tokens/reuse-strategy.conf';

import { HomepageComponent } from "./pages/homepage/homepage.component";
import { ContactComponent } from "./pages/contact/contact.component";

import { MembershipModule } from "./membership/membership.module";

@NgModule({
  declarations: [AppComponent, HomepageComponent, ContactComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthenticationModule,
    MembershipModule,
  ],
  providers: [  
    { provide: AUTHENTICATION_INTERFACES, useValue: authentication_interfaces },
    {
      provide: AUTHENTICATION_LOGIN_PIPELINE,
      useValue: authentication_login_pipeline,
    },
    {
      provide: AUTHENTICATION_REGISTRATION_REQUIRED,
      useValue: authentication_reg_required,
    },
    {
      provide: AUTHENTICATION_REGISTRATION_PIPELINE,
      useValue: authentication_registration_pipeline,
    },
    {
      provide: AUTHENTICATION_DROPDOWN_ITEMS,
      useValue: authentication_dropdown_items,
    },
    { provide: MDDS_ROUTE_REUSE_RUIs, useValue: route_reuse_uris },
    { provide: RouteReuseStrategy, useClass: MddsRouteReuseStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
