import { Routes } from '@angular/router';

import { MembershipComponent } from '../membership/membership.component';

//Import routing paths
import { 
  additionalinfoRoutingCorePath,  
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

export const membership_server_root_uri: string = '/api/membership';
