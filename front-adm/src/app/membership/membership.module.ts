import {
  NgModule
} from '@angular/core';
import {
  MembershipRoutingModule
} from './membership-routing.module';
import {
  MembershipCoreModule
} from './membership.core.module';
import {
  MembershipCustModule
} from '../membership-cust/membership.cust.module'
@NgModule({
  imports: [
    MembershipRoutingModule,
    MembershipCoreModule,
    MembershipCustModule,
  ],
  declarations: [],
  exports: [
    MembershipCoreModule,
    MembershipCustModule,
  ],
  providers: [],
  entryComponents: []
})
export class MembershipModule {}