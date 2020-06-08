import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';






import { ActionEmailModule } from '@hicoder/angular-action-email';

import { MddsCoreModule } from '@hicoder/angular-core';

import { MembershipRoutingCoreModule } from './membership-routing.core.module';
import { MembershipComponent } from './membership.component';


import { Membership_SERVER_ROOT_URI } from './membership.tokens';
import { membership_server_root_uri } from '../membership-cust/membership.conf';

// Import components for each schema



import { AdditionalinfoDetailComponent } from './additionalinfo/additionalinfo-detail/additionalinfo-detail.component';

import { AdditionalinfoDetailFieldComponent } from './additionalinfo/additionalinfo-detail/additionalinfo-detail-field.component';
import { AdditionalinfoEditComponent } from './additionalinfo/additionalinfo-edit/additionalinfo-edit.component';

import { AdditionalinfoService } from './additionalinfo/additionalinfo.service';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MddsCoreModule,
    ActionEmailModule,


    MembershipRoutingCoreModule,
  ],
  declarations: [
    MembershipComponent,
    

    

    AdditionalinfoDetailComponent,

    AdditionalinfoDetailFieldComponent,
    AdditionalinfoEditComponent,







  ],
  exports: [
    MembershipComponent,

    

    AdditionalinfoDetailComponent,

    AdditionalinfoDetailFieldComponent,
    AdditionalinfoEditComponent,







  ],
  providers: [
    { provide: Membership_SERVER_ROOT_URI, useValue: membership_server_root_uri },


    AdditionalinfoService,
  ],
  entryComponents: [
    AdditionalinfoEditComponent,
  ]
})
export class MembershipCoreModule { }
