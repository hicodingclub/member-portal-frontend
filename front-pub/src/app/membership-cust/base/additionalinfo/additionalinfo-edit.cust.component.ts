import { Input } from '@angular/core';

import { AdditionalinfoComponent } from '../../../membership/additionalinfo/additionalinfo.component';

import { AuthenticationService } from '@hicoder/angular-auth'

export class AdditionalinfoEditCustComponent extends AdditionalinfoComponent {
    public options = {};
    public style = {'card-title': {color: 'red'}};
    ngOnInit() {
        const authService = this.injector.get(AuthenticationService);
        authService.allowTemporayToken();

        super.ngOnInit();
    }
}/*>>> Please check this recent updates and merge with existing ones***
**Date: Wed Jun 24 2020 22:36:07 GMT-0700 (Pacific Daylight Time)

import { Input } from '@angular/core';

import { AdditionalinfoComponent } from '../../../membership/additionalinfo/additionalinfo.component';

export class AdditionalinfoEditCustComponent extends AdditionalinfoComponent {        
}
**** End of recent updates.<<<*/
