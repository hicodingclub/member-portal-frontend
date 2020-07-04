import { Input, Component } from '@angular/core';

import { AdditionalinfoComponent } from '../../../membership/additionalinfo/additionalinfo.component';

import { AuthenticationService } from '@hicoder/angular-auth'

@Component({
    template: '',
})
export class AdditionalinfoEditCustComponent extends AdditionalinfoComponent {
    public options = {};
    public style = {'card-title': {color: 'red'}};
    ngOnInit() {
        const authService = this.injector.get(AuthenticationService);
        authService.allowTemporayToken();

        super.ngOnInit();
    }
}/*>>> Please check this recent updates and merge with existing ones***
**Date: Fri Jul 03 2020 18:03:11 GMT-0700 (Pacific Daylight Time)

import { Input, Component } from '@angular/core';

import { AdditionalinfoComponent } from '../../../membership/additionalinfo/additionalinfo.component';

@Component({
    template: '',
})
export class AdditionalinfoEditCustComponent extends AdditionalinfoComponent {        
}
**** End of recent updates.<<<*/
