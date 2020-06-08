import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router';

import { MembershipRoutes } from '../membership-cust/membership.conf';

@NgModule({
  imports: [RouterModule.forChild(MembershipRoutes)],
  exports: [RouterModule],
  providers: [ ],

})
export class MembershipRoutingModule { }
