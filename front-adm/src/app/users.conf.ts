import { Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';

// Import routing paths
import {muserRoutingPath,  } from './users/users-routing.path';

export const UsersRoutes: Routes = [
  { path: 'users',
    component: UsersComponent,
    children: [
      {path: '',  redirectTo: 'muser', pathMatch: 'full'},

      { path: 'muser',
        children: muserRoutingPath,
        data: {mraLevel: 1, item: 'muser'}
      },
    ]
  }
];
export const users_server_root_uri: string = '/api/users';
