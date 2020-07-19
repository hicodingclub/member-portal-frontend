import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  FormsModule
} from '@angular/forms';
import {
  FileUploadModule
} from '@hicoder/angular-file';
import {
  ActionEmailModule
} from '@hicoder/angular-action-email';
import {
  MddsCoreModule
} from '@hicoder/angular-core';
import {
  MembershipRoutingCoreModule
} from './membership-routing.core.module';
import {
  MembershipComponent
} from './membership.component';
// Import components for each schema
import {
  AdditionalinfoComponent
} from './additionalinfo/additionalinfo.component';
import {
  AdditionalinfoListComponent
} from './additionalinfo/additionalinfo-list/additionalinfo-list.component';
import {
  AdditionalinfoListCustComponent
} from '../membership-cust/base/additionalinfo/additionalinfo-list.cust.component';
import {
  AdditionalinfoDetailComponent
} from './additionalinfo/additionalinfo-detail/additionalinfo-detail.component';
import {
  AdditionalinfoDetailCustComponent
} from '../membership-cust/base/additionalinfo/additionalinfo-detail.cust.component';
import {
  AdditionalinfoDetailFieldComponent
} from './additionalinfo/additionalinfo-detail/additionalinfo-detail-field.component';
import {
  AdditionalinfoEditComponent
} from './additionalinfo/additionalinfo-edit/additionalinfo-edit.component';
import {
  AdditionalinfoEditCustComponent
} from '../membership-cust/base/additionalinfo/additionalinfo-edit.cust.component';
import {
  BoardComponent
} from './board/board.component';
import {
  BoardListComponent
} from './board/board-list/board-list.component';
import {
  BoardListCustComponent
} from '../membership-cust/base/board/board-list.cust.component';
import {
  BoardDetailFieldComponent
} from './board/board-detail/board-detail-field.component';
import {
  LeadComponent
} from './lead/lead.component';
import {
  LeadListComponent
} from './lead/lead-list/lead-list.component';
import {
  LeadListCustComponent
} from '../membership-cust/base/lead/lead-list.cust.component';
import {
  LeadDetailFieldComponent
} from './lead/lead-detail/lead-detail-field.component';
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
    AdditionalinfoComponent,
    AdditionalinfoListComponent,
    AdditionalinfoListCustComponent,
    AdditionalinfoDetailCustComponent,
    AdditionalinfoDetailComponent,
    AdditionalinfoDetailFieldComponent,
    AdditionalinfoEditComponent,
    AdditionalinfoEditCustComponent,
    BoardComponent,
    BoardListComponent,
    BoardListCustComponent,
    BoardDetailFieldComponent,
    LeadComponent,
    LeadListComponent,
    LeadListCustComponent,
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
  providers: [],
  entryComponents: [
    AdditionalinfoEditComponent,
  ]
})
export class MembershipCoreModule {}