import { InjectionToken } from '@angular/core';

import { membership_server_root_uri } from '../membership-cust/membership.tokens.value';

export const Membership_SERVER_ROOT_URI = new InjectionToken<string>(
    'Membership_SERVER_ROOT_URI',
    {
        factory: (): string => membership_server_root_uri,
        providedIn: 'root',
    },
);