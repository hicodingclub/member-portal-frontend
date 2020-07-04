import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MembershipCoreModule } from '../membership/membership.core.module';
import { MembershipCheckingComponent } from './cust/membership-checking.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    MembershipCoreModule,
  ],
  declarations: [
    MembershipCheckingComponent
  ],
  exports: [
  ],
  providers: [
  ],
  entryComponents: [
  ],
})
export class MembershipCustModule { }
/*>>> Please check this recent updates and merge with existing ones***
**Date: Fri Jul 03 2020 18:03:11 GMT-0700 (Pacific Daylight Time)

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MembershipCoreModule } from '../membership/membership.core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    MembershipCoreModule,
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: [
  ],
  entryComponents: [
  ],
})
export class MembershipCustModule { }
**** End of recent updates.<<<*/
