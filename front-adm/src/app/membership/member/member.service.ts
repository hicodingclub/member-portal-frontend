import { Injectable, Inject, OnDestroy, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MemberBaseService } from './member.base.service';
import { Membership_SERVER_ROOT_URI } from '../membership.tokens';

@Injectable()
export class MemberService extends MemberBaseService implements OnDestroy {
    constructor(
        http: HttpClient,
        @Inject(Membership_SERVER_ROOT_URI) private membershipServerRootUri: string) {
        super(http, membershipServerRootUri);
    }
    ngOnDestroy() { }
}
