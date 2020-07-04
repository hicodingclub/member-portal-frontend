import { Input, Component } from '@angular/core';

import { LeadComponent } from '../../../membership/lead/lead.component';

@Component({
    template: '',
})
export class LeadListCustComponent extends LeadComponent {
    public options: any = {'disableListHead': true, 'disablePagination': true};
}

/*>>> Please check this recent updates and merge with existing ones***
**Date: Fri Jul 03 2020 18:03:11 GMT-0700 (Pacific Daylight Time)

import { Input, Component } from '@angular/core';

import { LeadComponent } from '../../../membership/lead/lead.component';

@Component({
    template: '',
})
export class LeadListCustComponent extends LeadComponent {
}

**** End of recent updates.<<<*/
