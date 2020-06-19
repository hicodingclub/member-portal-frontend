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
**Date: Tue Jun 16 2020 23:23:09 GMT-0700 (Pacific Daylight Time)

import { Input } from '@angular/core';

import { AdditionalinfoComponent } from '../../../membership/additionalinfo/additionalinfo.component';

export class AdditionalinfoEditCustComponent extends AdditionalinfoComponent {        
}
**** End of recent updates.<<<*/
