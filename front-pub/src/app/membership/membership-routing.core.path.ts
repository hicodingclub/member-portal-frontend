// Import components for each schema



import { AdditionalinfoDetailComponent } from './additionalinfo/additionalinfo-detail/additionalinfo-detail.component';

import { AdditionalinfoEditComponent } from './additionalinfo/additionalinfo-edit/additionalinfo-edit.component';



import { AuthGuard } from '@hicoder/angular-auth';




export const additionalinfoRoutingCorePath = [
    
    {path: 'detail/:id', component: AdditionalinfoDetailComponent, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: AdditionalinfoEditComponent, canActivate: [AuthGuard]},
    {path: 'new', component: AdditionalinfoEditComponent},
    
    
];

