import { Injectable, Inject, OnDestroy, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdditionalinfoBaseService } from './additionalinfo.base.service';
import { Membership_SERVER_ROOT_URI } from '../membership.tokens';

@Injectable({
    providedIn: 'root',
})
export class AdditionalinfoService extends AdditionalinfoBaseService implements OnDestroy {
    constructor(
        http: HttpClient,
        @Inject(Membership_SERVER_ROOT_URI) private membershipServerRootUri: string) {
        super(http, membershipServerRootUri);
    }
    ngOnDestroy() { }
}
