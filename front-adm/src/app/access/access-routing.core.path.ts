// Import components for each schema
import {
  MpubroleListComponent
} from './mpubrole/mpubrole-list/mpubrole-list.component';
import {
  MpubroleDetailComponent
} from './mpubrole/mpubrole-detail/mpubrole-detail.component';
import {
  MpubroleEditComponent
} from './mpubrole/mpubrole-edit/mpubrole-edit.component';
import {
  MpubmoduleListComponent
} from './mpubmodule/mpubmodule-list/mpubmodule-list.component';
import {
  MpubmoduleDetailComponent
} from './mpubmodule/mpubmodule-detail/mpubmodule-detail.component';
import {
  MpubmoduleEditComponent
} from './mpubmodule/mpubmodule-edit/mpubmodule-edit.component';
import {
  MpubpermissionListComponent
} from './mpubpermission/mpubpermission-list/mpubpermission-list.component';
import {
  MpubpermissionDetailComponent
} from './mpubpermission/mpubpermission-detail/mpubpermission-detail.component';
import {
  MpubpermissionEditComponent
} from './mpubpermission/mpubpermission-edit/mpubpermission-edit.component';
import {
  MpubpermissionListSubComponent
} from './mpubpermission/mpubpermission-list/mpubpermission-list-sub.component';
import {
  MuserListComponent
} from './muser/muser-list/muser-list.component';
import {
  MuserDetailComponent
} from './muser/muser-detail/muser-detail.component';
import {
  MuserEditComponent
} from './muser/muser-edit/muser-edit.component';
import {
  MuserroleListComponent
} from './muserrole/muserrole-list/muserrole-list.component';
import {
  MuserroleDetailComponent
} from './muserrole/muserrole-detail/muserrole-detail.component';
import {
  MuserroleEditComponent
} from './muserrole/muserrole-edit/muserrole-edit.component';
import {
  MuserroleListSubComponent
} from './muserrole/muserrole-list/muserrole-list-sub.component';
import {
  AuthGuard
} from '@hicoder/angular-auth';
const mpubpermissionSubPath = [{
  path: 'list',
  component: MpubpermissionListSubComponent
}];
const muserroleSubPath = [{
  path: 'list',
  component: MuserroleListSubComponent
}];
const mpubroleDetailPath = [{
  path: 'mpubpermission',
  children: mpubpermissionSubPath,
  data: {
    'mraLevel': 2,
    'item': 'mpubpermission'
  }
}, {
  path: 'muserrole',
  children: muserroleSubPath,
  data: {
    'mraLevel': 2,
    'item': 'muserrole'
  }
}, ];
const mpubmoduleDetailPath = [{
  path: 'mpubpermission',
  children: mpubpermissionSubPath,
  data: {
    'mraLevel': 2,
    'item': 'mpubpermission'
  }
}, ];
const muserDetailPath = [{
  path: 'muserrole',
  children: muserroleSubPath,
  data: {
    'mraLevel': 2,
    'item': 'muserrole'
  }
}, ];
export const mpubroleRoutingCorePath = [{
  path: 'list',
  component: MpubroleListComponent,
  canActivate: [AuthGuard]
}, {
  path: 'detail/:id',
  component: MpubroleDetailComponent,
  children: mpubroleDetailPath,
  canActivate: [AuthGuard]
}, {
  path: 'edit/:id',
  component: MpubroleEditComponent,
  canActivate: [AuthGuard]
}, {
  path: 'new',
  component: MpubroleEditComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];
export const mpubmoduleRoutingCorePath = [{
  path: 'list',
  component: MpubmoduleListComponent,
  canActivate: [AuthGuard]
}, {
  path: 'detail/:id',
  component: MpubmoduleDetailComponent,
  children: mpubmoduleDetailPath,
  canActivate: [AuthGuard]
}, {
  path: 'edit/:id',
  component: MpubmoduleEditComponent,
  canActivate: [AuthGuard]
}, {
  path: 'new',
  component: MpubmoduleEditComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];
export const mpubpermissionRoutingCorePath = [{
  path: 'list',
  component: MpubpermissionListComponent,
  canActivate: [AuthGuard]
}, {
  path: 'detail/:id',
  component: MpubpermissionDetailComponent,
  canActivate: [AuthGuard]
}, {
  path: 'edit/:id',
  component: MpubpermissionEditComponent,
  canActivate: [AuthGuard]
}, {
  path: 'new',
  component: MpubpermissionEditComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];
export const muserRoutingCorePath = [{
  path: 'list',
  component: MuserListComponent,
  canActivate: [AuthGuard]
}, {
  path: 'detail/:id',
  component: MuserDetailComponent,
  children: muserDetailPath,
  canActivate: [AuthGuard]
}, {
  path: 'edit/:id',
  component: MuserEditComponent,
  canActivate: [AuthGuard]
}, {
  path: 'new',
  component: MuserEditComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];
export const muserroleRoutingCorePath = [{
  path: 'list',
  component: MuserroleListComponent,
  canActivate: [AuthGuard]
}, {
  path: 'detail/:id',
  component: MuserroleDetailComponent,
  canActivate: [AuthGuard]
}, {
  path: 'edit/:id',
  component: MuserroleEditComponent,
  canActivate: [AuthGuard]
}, {
  path: 'new',
  component: MuserroleEditComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];