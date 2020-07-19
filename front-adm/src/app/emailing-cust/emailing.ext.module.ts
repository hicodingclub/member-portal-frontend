import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { MraNgbDateFormatterService } from '../emailing/emailing.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    

    NgbModule,
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: [

    { provide: NgbDateParserFormatter, useClass: MraNgbDateFormatterService },
  ],
  entryComponents: [
  ],
})
export class EmailingExtModule { }
/*>>> Please check this recent updates and merge with existing ones***
**Date: Sun Jul 19 2020 15:08:48 GMT-0700 (Pacific Daylight Time)

import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  RouterModule
} from '@angular/router';
import {
  FormsModule
} from '@angular/forms';
import {
  NgbModule,
  NgbDateParserFormatter
} from '@ng-bootstrap/ng-bootstrap';
import {
  MraNgbDateFormatterService
} from '../emailing/emailing.directive';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModule,
  ],
  declarations: [],
  exports: [],
  providers: [{
    provide: NgbDateParserFormatter,
    useClass: MraNgbDateFormatterService
  }, ],
  entryComponents: [],
})
export class EmailingExtModule {}**** End of recent updates.<<<*/
