import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FileUploadModule } from '@hicoder/angular-file';
import { ActionEmailModule } from '@hicoder/angular-action-email';

import { MddsCoreModule } from '@hicoder/angular-core';

import { MembershipRoutingCoreModule } from './membership-routing.core.module';
import { MembershipComponent } from './membership.component';

// Import components for each schema
import { AdditionalinfoListComponent } from './additionalinfo/additionalinfo-list/additionalinfo-list.component';
import { AdditionalinfoDetailComponent } from './additionalinfo/additionalinfo-detail/additionalinfo-detail.component';
import { AdditionalinfoDetailFieldComponent } from './additionalinfo/additionalinfo-detail/additionalinfo-detail-field.component';
import { AdditionalinfoEditComponent } from './additionalinfo/additionalinfo-edit/additionalinfo-edit.component';
import { BoardListComponent } from './board/board-list/board-list.component';
import { BoardDetailFieldComponent } from './board/board-detail/board-detail-field.component';
import { LeadListComponent } from './lead/lead-list/lead-list.component';
import { LeadDetailFieldComponent } from './lead/lead-detail/lead-detail-field.component';

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
  ],
  entryComponents: [
    AdditionalinfoEditComponent,
  ]
})
export class MembershipCoreModule { }
