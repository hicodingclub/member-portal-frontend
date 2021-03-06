// Import components for each schema
import {
  MemberListComponent
} from './member/member-list/member-list.component';
import {
  MemberDetailComponent
} from './member/member-detail/member-detail.component';
import {
  MemberEditComponent
} from './member/member-edit/member-edit.component';
import {
  AdditionalinfoListComponent
} from './additionalinfo/additionalinfo-list/additionalinfo-list.component';
import {
  AdditionalinfoDetailComponent
} from './additionalinfo/additionalinfo-detail/additionalinfo-detail.component';
import {
  AdditionalinfoEditComponent
} from './additionalinfo/additionalinfo-edit/additionalinfo-edit.component';
import {
  AdditionalinfoListSubComponent
} from './additionalinfo/additionalinfo-list/additionalinfo-list-sub.component';
import {
  BoardListComponent
} from './board/board-list/board-list.component';
import {
  BoardDetailComponent
} from './board/board-detail/board-detail.component';
import {
  BoardEditComponent
} from './board/board-edit/board-edit.component';
import {
  LeadListComponent
} from './lead/lead-list/lead-list.component';
import {
  LeadDetailComponent
} from './lead/lead-detail/lead-detail.component';
import {
  LeadEditComponent
} from './lead/lead-edit/lead-edit.component';
import {
  AuthGuard
} from '@hicoder/angular-auth';
const additionalinfoSubPath = [{
  path: 'list',
  component: AdditionalinfoListSubComponent
}];
const memberDetailPath = [{
  path: 'additionalinfo',
  children: additionalinfoSubPath,
  data: {
    'mraLevel': 2,
    'item': 'additionalinfo'
  }
}, ];
export const memberRoutingCorePath = [{
  path: 'list',
  component: MemberListComponent,
  canActivate: [AuthGuard]
}, {
  path: 'detail/:id',
  component: MemberDetailComponent,
  children: memberDetailPath,
  canActivate: [AuthGuard]
}, {
  path: 'edit/:id',
  component: MemberEditComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];
export const additionalinfoRoutingCorePath = [{
  path: 'list',
  component: AdditionalinfoListComponent,
  canActivate: [AuthGuard]
}, {
  path: 'detail/:id',
  component: AdditionalinfoDetailComponent,
  canActivate: [AuthGuard]
}, {
  path: 'edit/:id',
  component: AdditionalinfoEditComponent,
  canActivate: [AuthGuard]
}, {
  path: 'new',
  component: AdditionalinfoEditComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];
export const boardRoutingCorePath = [{
  path: 'list',
  component: BoardListComponent,
  canActivate: [AuthGuard]
}, {
  path: 'detail/:id',
  component: BoardDetailComponent,
  canActivate: [AuthGuard]
}, {
  path: 'edit/:id',
  component: BoardEditComponent,
  canActivate: [AuthGuard]
}, {
  path: 'new',
  component: BoardEditComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];
export const leadRoutingCorePath = [{
  path: 'list',
  component: LeadListComponent,
  canActivate: [AuthGuard]
}, {
  path: 'detail/:id',
  component: LeadDetailComponent,
  canActivate: [AuthGuard]
}, {
  path: 'edit/:id',
  component: LeadEditComponent,
  canActivate: [AuthGuard]
}, {
  path: 'new',
  component: LeadEditComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];