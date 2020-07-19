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
  NgbModule,
  NgbDateParserFormatter
} from '@ng-bootstrap/ng-bootstrap';
import {
  MraNgbDateFormatterService
} from './access.directive';
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
  AccessRoutingCoreModule
} from './access-routing.core.module';
import {
  AccessComponent
} from './access.component';
import {
  AccessRefSelectDirective
} from './access.component';
// Import components for each schema
import {
  MpubroleComponent
} from './mpubrole/mpubrole.component';
import {
  MpubroleListComponent
} from './mpubrole/mpubrole-list/mpubrole-list.component';
import {
  MpubroleListCustComponent
} from '../access-cust/base/mpubrole/mpubrole-list.cust.component';
import {
  MpubroleDetailComponent
} from './mpubrole/mpubrole-detail/mpubrole-detail.component';
import {
  MpubroleDetailCustComponent
} from '../access-cust/base/mpubrole/mpubrole-detail.cust.component';
import {
  MpubroleDetailFieldComponent
} from './mpubrole/mpubrole-detail/mpubrole-detail-field.component';
import {
  MpubroleEditComponent
} from './mpubrole/mpubrole-edit/mpubrole-edit.component';
import {
  MpubroleEditCustComponent
} from '../access-cust/base/mpubrole/mpubrole-edit.cust.component';
import {
  MpubmoduleComponent
} from './mpubmodule/mpubmodule.component';
import {
  MpubmoduleListComponent
} from './mpubmodule/mpubmodule-list/mpubmodule-list.component';
import {
  MpubmoduleListCustComponent
} from '../access-cust/base/mpubmodule/mpubmodule-list.cust.component';
import {
  MpubmoduleDetailComponent
} from './mpubmodule/mpubmodule-detail/mpubmodule-detail.component';
import {
  MpubmoduleDetailCustComponent
} from '../access-cust/base/mpubmodule/mpubmodule-detail.cust.component';
import {
  MpubmoduleDetailFieldComponent
} from './mpubmodule/mpubmodule-detail/mpubmodule-detail-field.component';
import {
  MpubmoduleEditComponent
} from './mpubmodule/mpubmodule-edit/mpubmodule-edit.component';
import {
  MpubmoduleEditCustComponent
} from '../access-cust/base/mpubmodule/mpubmodule-edit.cust.component';
import {
  MpubpermissionComponent
} from './mpubpermission/mpubpermission.component';
import {
  MpubpermissionListComponent
} from './mpubpermission/mpubpermission-list/mpubpermission-list.component';
import {
  MpubpermissionListCustComponent
} from '../access-cust/base/mpubpermission/mpubpermission-list.cust.component';
import {
  MpubpermissionDetailComponent
} from './mpubpermission/mpubpermission-detail/mpubpermission-detail.component';
import {
  MpubpermissionDetailCustComponent
} from '../access-cust/base/mpubpermission/mpubpermission-detail.cust.component';
import {
  MpubpermissionDetailFieldComponent
} from './mpubpermission/mpubpermission-detail/mpubpermission-detail-field.component';
import {
  MpubpermissionEditComponent
} from './mpubpermission/mpubpermission-edit/mpubpermission-edit.component';
import {
  MpubpermissionEditCustComponent
} from '../access-cust/base/mpubpermission/mpubpermission-edit.cust.component';
import {
  MuserComponent
} from './muser/muser.component';
import {
  MuserListComponent
} from './muser/muser-list/muser-list.component';
import {
  MuserListCustComponent
} from '../access-cust/base/muser/muser-list.cust.component';
import {
  MuserDetailComponent
} from './muser/muser-detail/muser-detail.component';
import {
  MuserDetailCustComponent
} from '../access-cust/base/muser/muser-detail.cust.component';
import {
  MuserDetailFieldComponent
} from './muser/muser-detail/muser-detail-field.component';
import {
  MuserEditComponent
} from './muser/muser-edit/muser-edit.component';
import {
  MuserEditCustComponent
} from '../access-cust/base/muser/muser-edit.cust.component';
import {
  MuserroleComponent
} from './muserrole/muserrole.component';
import {
  MuserroleListComponent
} from './muserrole/muserrole-list/muserrole-list.component';
import {
  MuserroleListCustComponent
} from '../access-cust/base/muserrole/muserrole-list.cust.component';
import {
  MuserroleDetailComponent
} from './muserrole/muserrole-detail/muserrole-detail.component';
import {
  MuserroleDetailCustComponent
} from '../access-cust/base/muserrole/muserrole-detail.cust.component';
import {
  MuserroleDetailFieldComponent
} from './muserrole/muserrole-detail/muserrole-detail-field.component';
import {
  MuserroleEditComponent
} from './muserrole/muserrole-edit/muserrole-edit.component';
import {
  MuserroleEditCustComponent
} from '../access-cust/base/muserrole/muserrole-edit.cust.component';
import {
  MpubroleListSelectComponent
} from './mpubrole/mpubrole-list/mpubrole-list-select.component';
import {
  MpubroleDetailPopComponent
} from './mpubrole/mpubrole-detail/mpubrole-detail-pop.component';
import {
  MpubroleDetailSelComponent
} from './mpubrole/mpubrole-detail/mpubrole-detail-sel.component';
import {
  MpubmoduleListSelectComponent
} from './mpubmodule/mpubmodule-list/mpubmodule-list-select.component';
import {
  MpubmoduleDetailPopComponent
} from './mpubmodule/mpubmodule-detail/mpubmodule-detail-pop.component';
import {
  MpubmoduleDetailSelComponent
} from './mpubmodule/mpubmodule-detail/mpubmodule-detail-sel.component';
import {
  MuserListSelectComponent
} from './muser/muser-list/muser-list-select.component';
import {
  MuserDetailPopComponent
} from './muser/muser-detail/muser-detail-pop.component';
import {
  MuserDetailSelComponent
} from './muser/muser-detail/muser-detail-sel.component';
import {
  MpubpermissionListSubComponent
} from './mpubpermission/mpubpermission-list/mpubpermission-list-sub.component';
import {
  MpubpermissionDetailSubComponent
} from './mpubpermission/mpubpermission-detail/mpubpermission-detail-sub.component';
import {
  MuserroleListSubComponent
} from './muserrole/muserrole-list/muserrole-list-sub.component';
import {
  MuserroleDetailSubComponent
} from './muserrole/muserrole-detail/muserrole-detail-sub.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    MddsCoreModule,
    FileUploadModule,
    ActionEmailModule,
    AccessRoutingCoreModule,
  ],
  declarations: [
    AccessComponent,
    AccessRefSelectDirective,
    MpubroleComponent,
    MpubroleListComponent,
    MpubroleListCustComponent,
    MpubroleDetailCustComponent,
    MpubroleDetailComponent,
    MpubroleDetailFieldComponent,
    MpubroleEditComponent,
    MpubroleEditCustComponent,
    MpubmoduleComponent,
    MpubmoduleListComponent,
    MpubmoduleListCustComponent,
    MpubmoduleDetailCustComponent,
    MpubmoduleDetailComponent,
    MpubmoduleDetailFieldComponent,
    MpubmoduleEditComponent,
    MpubmoduleEditCustComponent,
    MpubpermissionComponent,
    MpubpermissionListComponent,
    MpubpermissionListCustComponent,
    MpubpermissionDetailCustComponent,
    MpubpermissionDetailComponent,
    MpubpermissionDetailFieldComponent,
    MpubpermissionEditComponent,
    MpubpermissionEditCustComponent,
    MuserComponent,
    MuserListComponent,
    MuserListCustComponent,
    MuserDetailCustComponent,
    MuserDetailComponent,
    MuserDetailFieldComponent,
    MuserEditComponent,
    MuserEditCustComponent,
    MuserroleComponent,
    MuserroleListComponent,
    MuserroleListCustComponent,
    MuserroleDetailCustComponent,
    MuserroleDetailComponent,
    MuserroleDetailFieldComponent,
    MuserroleEditComponent,
    MuserroleEditCustComponent,
    MpubroleListSelectComponent,
    MpubroleDetailPopComponent,
    MpubroleDetailSelComponent,
    MpubmoduleListSelectComponent,
    MpubmoduleDetailPopComponent,
    MpubmoduleDetailSelComponent,
    MuserListSelectComponent,
    MuserDetailPopComponent,
    MuserDetailSelComponent,
    MpubpermissionListSubComponent,
    MpubpermissionDetailSubComponent,
    MuserroleListSubComponent,
    MuserroleDetailSubComponent,
  ],
  exports: [
    AccessComponent,
    MpubroleListComponent,
    MpubroleDetailComponent,
    MpubroleDetailFieldComponent,
    MpubroleEditComponent,
    MpubmoduleListComponent,
    MpubmoduleDetailComponent,
    MpubmoduleDetailFieldComponent,
    MpubmoduleEditComponent,
    MpubpermissionListComponent,
    MpubpermissionDetailComponent,
    MpubpermissionDetailFieldComponent,
    MpubpermissionEditComponent,
    MuserListComponent,
    MuserDetailComponent,
    MuserDetailFieldComponent,
    MuserEditComponent,
    MuserroleListComponent,
    MuserroleDetailComponent,
    MuserroleDetailFieldComponent,
    MuserroleEditComponent,
    MpubroleListSelectComponent,
    MpubroleDetailPopComponent,
    MpubroleDetailSelComponent,
    MpubmoduleListSelectComponent,
    MpubmoduleDetailPopComponent,
    MpubmoduleDetailSelComponent,
    MuserListSelectComponent,
    MuserDetailPopComponent,
    MuserDetailSelComponent,
    MpubpermissionListSubComponent,
    MpubpermissionDetailSubComponent,
    MuserroleListSubComponent,
    MuserroleDetailSubComponent,
  ],
  providers: [{
    provide: NgbDateParserFormatter,
    useClass: MraNgbDateFormatterService
  }, ],
  entryComponents: [
    MpubroleListSelectComponent,
    MpubroleDetailPopComponent,
    MpubroleDetailSelComponent,
    MpubmoduleListSelectComponent,
    MpubmoduleDetailPopComponent,
    MpubmoduleDetailSelComponent,
    MuserListSelectComponent,
    MuserDetailPopComponent,
    MuserDetailSelComponent,
    MpubroleEditComponent,
    MpubmoduleEditComponent,
    MpubpermissionEditComponent,
    MuserEditComponent,
    MuserroleEditComponent,
  ]
})
export class AccessCoreModule {}