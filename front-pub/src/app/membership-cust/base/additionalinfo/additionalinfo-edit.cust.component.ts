import { Input, Component } from '@angular/core';

import { AdditionalinfoComponent } from '../../../membership/additionalinfo/additionalinfo.component';

import { AuthenticationService } from '@hicoder/angular-auth'

@Component({
    template: '',
})
export class AdditionalinfoEditCustComponent extends AdditionalinfoComponent {
    public options = {
      disableCancel: true,
    };
    public style = {'card-title': {color: 'red'}};
    ngOnInit() {
        const authService = this.injector.get(AuthenticationService);
        authService.allowTemporayToken();

        super.ngOnInit();
    }
}/*>>> Please check this recent updates and merge with existing ones***
**Date: Sun Jul 19 2020 15:08:04 GMT-0700 (Pacific Daylight Time)

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
export class AdditionalinfoEditCustComponent extends AdditionalinfoComponent {}**** End of recent updates.<<<*/
