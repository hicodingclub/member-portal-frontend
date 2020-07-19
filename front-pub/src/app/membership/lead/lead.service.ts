import {
  Injectable,
  Inject,
  OnDestroy,
  SkipSelf
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  LeadBaseService
} from './lead.base.service';
import {
  Membership_SERVER_ROOT_URI
} from '../membership.tokens';
@Injectable({
  providedIn: 'root',
})
export class LeadService extends LeadBaseService implements OnDestroy {
  constructor(http: HttpClient, @Inject(Membership_SERVER_ROOT_URI) private membershipServerRootUri: string) {
    super(http, membershipServerRootUri);
  }
  ngOnDestroy() {}
}