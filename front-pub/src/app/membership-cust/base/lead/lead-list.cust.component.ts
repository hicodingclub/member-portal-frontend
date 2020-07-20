import { Input, Component } from '@angular/core';

import { LeadComponent } from '../../../membership/lead/lead.component';

@Component({
    template: '',
})
export class LeadListCustComponent extends LeadComponent {
    public options: any = {'disableListHead': true, 'disablePagination': true};
}

/*>>> Please check this recent updates and merge with existing ones***
**Date: Sun Jul 19 2020 22:23:44 GMT-0700 (Pacific Daylight Time)

import {
  Input,
  Component
} from '@angular/core';
import {
  LeadComponent
} from '../../../membership/lead/lead.component';
@Component({
  template: '',
})
export class LeadListCustComponent extends LeadComponent {}**** End of recent updates.<<<*/
