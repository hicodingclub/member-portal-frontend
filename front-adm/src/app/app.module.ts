import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RouteReuseStrategy } from '@angular/router';
import { MddsCoreModule, MddsRouteReuseStrategy } from '@hicoder/angular-core';

import { AuthenticationModule, AUTHENTICATION_INTERFACES } from '@hicoder/angular-auth';

import { MDDS_ROUTE_REUSE_RUIs } from '@hicoder/angular-core';
import { route_reuse_uris } from './injection-tokens/reuse-strategy.conf';

import { UsersModule } from './users/users.module';

import { HomeModule } from './home/home.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { authentication_interfaces } from './injection-tokens/auth.conf';

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
    { provide: AUTHENTICATION_INTERFACES, useValue: authentication_interfaces },
    { provide: MDDS_ROUTE_REUSE_RUIs, useValue: route_reuse_uris },
    { provide: RouteReuseStrategy, useClass: MddsRouteReuseStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
