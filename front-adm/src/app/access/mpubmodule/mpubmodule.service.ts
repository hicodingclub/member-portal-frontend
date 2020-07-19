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
  MpubmoduleBaseService
} from './mpubmodule.base.service';
import {
  Access_SERVER_ROOT_URI
} from '../access.tokens';
@Injectable({
  providedIn: 'root',
})
export class MpubmoduleService extends MpubmoduleBaseService implements OnDestroy {
  constructor(http: HttpClient, @Inject(Access_SERVER_ROOT_URI) private accessServerRootUri: string) {
    super(http, accessServerRootUri);
  }
  ngOnDestroy() {}
}