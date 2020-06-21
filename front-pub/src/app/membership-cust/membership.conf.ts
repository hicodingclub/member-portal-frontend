import { Routes } from '@angular/router';

import { MembershipComponent } from '../membership/membership.component';

//Import routing paths
import { 
  additionalinfoRoutingCorePath, 
  boardRoutingCorePath, 
  leadRoutingCorePath,  
} from '../membership/membership-routing.core.path';

export const MembershipCoreRoutes: Routes = [
  { 
    // Lazy Load: and add to app routing: 
    //     { path: 'membership', loadChildren: () => import('./membership/membership.module').then(m => m.MembershipModule) },
    path: '',
    // non lazy load config. Include module in app module.
    // path: 'membership',

    component: MembershipComponent,
    children: [
      {path: '',  redirectTo: 'additionalinfo', pathMatch: 'full'},

      { path: 'additionalinfo',
        children: additionalinfoRoutingCorePath,
        data: {mraLevel: 1, item: 'additionalinfo'}
      },
      { path: 'board',
        children: boardRoutingCorePath,
        data: {mraLevel: 1, item: 'board'}
      },
      { path: 'lead',
        children: leadRoutingCorePath,
        data: {mraLevel: 1, item: 'lead'}
      },
    ]
  },
];

import { MembershipRoutingCustPath } from './membership-routing.cust.path';

export const MembershipRoutes: Routes = [
  {
    // Lazy Load: and add to app routing: 
    //     { path: 'membership', loadChildren: () => import('./membership/membership.module').then(m => m.MembershipModule) },
    path: 'cust',
    // non lazy load config. Include module in app module.
    // path: 'membership/cust',

    children: MembershipRoutingCustPath,
  },
];

export const membership_server_root_uri: string = '/api/membership';/*>>> Please check this recent updates and merge with existing ones***
**Date: Wed Jun 24 2020 22:36:07 GMT-0700 (Pacific Daylight Time)

import { Routes } from '@angular/router';

import { MembershipComponent } from '../membership/membership.component';

//Import routing paths
import { 
  additionalinfoRoutingCorePath,
  boardRoutingCorePath,
  leadRoutingCorePath,
} from '../membership/membership-routing.core.path';

export const MembershipCoreRoutes: Routes = [
  { 
    // Lazy Load: and add to app routing:
    //     { path: 'membership', loadChildren: () => import('./membership/membership.module').then(m => m.MembershipModule) },
    path: '',
    // non lazy load config. Include module in app module.
    // path: 'membership',

    component: MembershipComponent,
    children: [
      {path: '',  redirectTo: 'additionalinfo', pathMatch: 'full'},

      { path: 'additionalinfo',
        children: additionalinfoRoutingCorePath,
        data: {mraLevel: 1, item: 'additionalinfo'}
      },
      { path: 'board',
        children: boardRoutingCorePath,
        data: {mraLevel: 1, item: 'board'}
      },
      { path: 'lead',
        children: leadRoutingCorePath,
        data: {mraLevel: 1, item: 'lead'}
      },
    ]
  },
];

import { MembershipRoutingCustPath } from './membership-routing.cust.path';

export const MembershipRoutes: Routes = [
  {
    // Lazy Load: and add to app routing:
    //     { path: 'membership', loadChildren: () => import('./membership/membership.module').then(m => m.MembershipModule) },
    path: 'cust',
    // non lazy load config. Include module in app module.
    // path: 'membership/cust',

    children: MembershipRoutingCustPath,
  },
];**** End of recent updates.<<<*/
