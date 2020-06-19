import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';





import { FileUploadModule } from '@hicoder/angular-file';

import { ActionEmailModule } from '@hicoder/angular-action-email';

import { MddsCoreModule } from '@hicoder/angular-core';

import { MembershipRoutingCoreModule } from './membership-routing.core.module';
import { MembershipComponent } from './membership.component';


import { Membership_SERVER_ROOT_URI } from './membership.tokens';
import { membership_server_root_uri } from '../membership-cust/membership.conf';

// Import components for each schema

import { AdditionalinfoListComponent } from './additionalinfo/additionalinfo-list/additionalinfo-list.component';

import { AdditionalinfoDetailComponent } from './additionalinfo/additionalinfo-detail/additionalinfo-detail.component';

import { AdditionalinfoDetailFieldComponent } from './additionalinfo/additionalinfo-detail/additionalinfo-detail-field.component';
import { AdditionalinfoEditComponent } from './additionalinfo/additionalinfo-edit/additionalinfo-edit.component';

import { AdditionalinfoService } from './additionalinfo/additionalinfo.service';

import { BoardListComponent } from './board/board-list/board-list.component';



import { BoardDetailFieldComponent } from './board/board-detail/board-detail-field.component';


import { BoardService } from './board/board.service';

import { LeadListComponent } from './lead/lead-list/lead-list.component';



import { LeadDetailFieldComponent } from './lead/lead-detail/lead-detail-field.component';


import { LeadService } from './lead/lead.service';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MddsCoreModule,
    FileUploadModule,
    ActionEmailModule,


    MembershipRoutingCoreModule,
  ],
  declarations: [
    MembershipComponent,
    

    AdditionalinfoListComponent,

    AdditionalinfoDetailComponent,

    AdditionalinfoDetailFieldComponent,
    AdditionalinfoEditComponent,

    BoardListComponent,

    

    BoardDetailFieldComponent,
    

    LeadListComponent,

    

    LeadDetailFieldComponent,
    







  ],
  exports: [
    MembershipComponent,

    AdditionalinfoListComponent,

    AdditionalinfoDetailComponent,

    AdditionalinfoDetailFieldComponent,
    AdditionalinfoEditComponent,

    BoardListComponent,

    

    BoardDetailFieldComponent,
    

    LeadListComponent,

    

    LeadDetailFieldComponent,
    







  ],
  providers: [
    { provide: Membership_SERVER_ROOT_URI, useValue: membership_server_root_uri },


    AdditionalinfoService,
    BoardService,
    LeadService,
  ],
  entryComponents: [
    AdditionalinfoEditComponent,
  ]
})
export class MembershipCoreModule { }
