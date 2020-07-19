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
  BoardBaseService
} from './board.base.service';
import {
  Membership_SERVER_ROOT_URI
} from '../membership.tokens';
@Injectable({
  providedIn: 'root',
})
export class BoardService extends BoardBaseService implements OnDestroy {
  constructor(http: HttpClient, @Inject(Membership_SERVER_ROOT_URI) private membershipServerRootUri: string) {
    super(http, membershipServerRootUri);
  }
  ngOnDestroy() {}
}