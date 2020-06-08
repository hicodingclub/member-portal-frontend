import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MembershipComponent } from './membership.component';
import { MembershipCoreRoutes } from '../membership-cust/membership.conf';

@NgModule({
  imports: [RouterModule.forChild(MembershipCoreRoutes)],
  exports: [RouterModule],
  providers: [ ],

})
export class MembershipRoutingCoreModule { }
