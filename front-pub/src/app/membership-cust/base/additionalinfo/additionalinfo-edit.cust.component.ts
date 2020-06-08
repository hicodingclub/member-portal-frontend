import { Input } from '@angular/core';

import { AdditionalinfoComponent } from '../../../membership/additionalinfo/additionalinfo.component';

import { AuthenticationService } from '@hicoder/angular-auth'

export class AdditionalinfoEditCustComponent extends AdditionalinfoComponent {
    ngOnInit() {
        const authService = this.injector.get(AuthenticationService);
        authService.allowTemporayToken();
        
        super.ngOnInit();
    }
}