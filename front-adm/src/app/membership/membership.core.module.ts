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
import {
  MembershipRefSelectDirective
} from './membership.component';
// Import components for each schema
import {
  MemberComponent
} from './member/member.component';
import {
  MemberListComponent
} from './member/member-list/member-list.component';
import {
  MemberListCustComponent
} from '../membership-cust/base/member/member-list.cust.component';
import {
  MemberDetailComponent
} from './member/member-detail/member-detail.component';
import {
  MemberDetailCustComponent
} from '../membership-cust/base/member/member-detail.cust.component';
import {
  MemberDetailFieldComponent
} from './member/member-detail/member-detail-field.component';
import {
  MemberEditComponent
} from './member/member-edit/member-edit.component';
import {
  MemberEditCustComponent
} from '../membership-cust/base/member/member-edit.cust.component';
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
  BoardDetailComponent
} from './board/board-detail/board-detail.component';
import {
  BoardDetailCustComponent
} from '../membership-cust/base/board/board-detail.cust.component';
import {
  BoardDetailFieldComponent
} from './board/board-detail/board-detail-field.component';
import {
  BoardEditComponent
} from './board/board-edit/board-edit.component';
import {
  BoardEditCustComponent
} from '../membership-cust/base/board/board-edit.cust.component';
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
  LeadDetailComponent
} from './lead/lead-detail/lead-detail.component';
import {
  LeadDetailCustComponent
} from '../membership-cust/base/lead/lead-detail.cust.component';
import {
  LeadDetailFieldComponent
} from './lead/lead-detail/lead-detail-field.component';
import {
  LeadEditComponent
} from './lead/lead-edit/lead-edit.component';
import {
  LeadEditCustComponent
} from '../membership-cust/base/lead/lead-edit.cust.component';
import {
  MemberListSelectComponent
} from './member/member-list/member-list-select.component';
import {
  MemberDetailPopComponent
} from './member/member-detail/member-detail-pop.component';
import {
  MemberDetailSelComponent
} from './member/member-detail/member-detail-sel.component';
import {
  AdditionalinfoListSubComponent
} from './additionalinfo/additionalinfo-list/additionalinfo-list-sub.component';
import {
  AdditionalinfoDetailSubComponent
} from './additionalinfo/additionalinfo-detail/additionalinfo-detail-sub.component';
import {
  MembershipMemberDirectiveEmail
} from './member/member-edit/member-edit.component';
import {
  MembershipMemberDirectivePhone
} from './member/member-edit/member-edit.component';
import {
  MembershipBoardDirectiveEmail
} from './board/board-edit/board-edit.component';
import {
  MembershipLeadDirectiveEmail
} from './lead/lead-edit/lead-edit.component';
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
    MembershipRefSelectDirective,
    MemberComponent,
    MemberListComponent,
    MemberListCustComponent,
    MemberDetailCustComponent,
    MemberDetailComponent,
    MemberDetailFieldComponent,
    MemberEditComponent,
    MemberEditCustComponent,
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
    BoardDetailCustComponent,
    BoardDetailComponent,
    BoardDetailFieldComponent,
    BoardEditComponent,
    BoardEditCustComponent,
    LeadComponent,
    LeadListComponent,
    LeadListCustComponent,
    LeadDetailCustComponent,
    LeadDetailComponent,
    LeadDetailFieldComponent,
    LeadEditComponent,
    LeadEditCustComponent,
    MemberListSelectComponent,
    MemberDetailPopComponent,
    MemberDetailSelComponent,
    AdditionalinfoListSubComponent,
    AdditionalinfoDetailSubComponent,
    MembershipMemberDirectiveEmail,
    MembershipMemberDirectivePhone,
    MembershipBoardDirectiveEmail,
    MembershipLeadDirectiveEmail,
  ],
  exports: [
    MembershipComponent,
    MemberListComponent,
    MemberDetailComponent,
    MemberDetailFieldComponent,
    MemberEditComponent,
    AdditionalinfoListComponent,
    AdditionalinfoDetailComponent,
    AdditionalinfoDetailFieldComponent,
    AdditionalinfoEditComponent,
    BoardListComponent,
    BoardDetailComponent,
    BoardDetailFieldComponent,
    BoardEditComponent,
    LeadListComponent,
    LeadDetailComponent,
    LeadDetailFieldComponent,
    LeadEditComponent,
    MemberListSelectComponent,
    MemberDetailPopComponent,
    MemberDetailSelComponent,
    AdditionalinfoListSubComponent,
    AdditionalinfoDetailSubComponent,
    MembershipMemberDirectiveEmail,
    MembershipMemberDirectivePhone,
    MembershipBoardDirectiveEmail,
    MembershipLeadDirectiveEmail,
  ],
  providers: [],
  entryComponents: [
    MemberListSelectComponent,
    MemberDetailPopComponent,
    MemberDetailSelComponent,
    AdditionalinfoEditComponent,
    BoardEditComponent,
    LeadEditComponent,
  ]
})
export class MembershipCoreModule {}