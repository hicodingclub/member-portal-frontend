import { Input, Component } from '@angular/core';

import { AdditionalinfoComponent } from '../../../membership/additionalinfo/additionalinfo.component';

@Component({
    template: '',
})
export class AdditionalinfoDetailCustComponent extends AdditionalinfoComponent {
  public options: any = {
    disableActionList: true,
    disableActionNew: true,
  }
}
/*>>> Please check this recent updates and merge with existing ones***
**Date: Sun Jul 19 2020 22:23:44 GMT-0700 (Pacific Daylight Time)

import {
  Input,
  Component
} from '@angular/core';
import {
  AdditionalinfoComponent
} from '../../../membership/additionalinfo/additionalinfo.component';
@Component({
  template: '',
})
export class AdditionalinfoDetailCustComponent extends AdditionalinfoComponent {}**** End of recent updates.<<<*/
