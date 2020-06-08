// Import components for each schema

import { EmailtemplateListComponent } from './emailtemplate/emailtemplate-list/emailtemplate-list.component';
import { EmailtemplateDetailComponent } from './emailtemplate/emailtemplate-detail/emailtemplate-detail.component';

import { EmailtemplateEditComponent } from './emailtemplate/emailtemplate-edit/emailtemplate-edit.component';


import { EmailsettingsListComponent } from './emailsettings/emailsettings-list/emailsettings-list.component';
import { EmailsettingsDetailComponent } from './emailsettings/emailsettings-detail/emailsettings-detail.component';

import { EmailsettingsEditComponent } from './emailsettings/emailsettings-edit/emailsettings-edit.component';


import { EmaillogListComponent } from './emaillog/emaillog-list/emaillog-list.component';
import { EmaillogDetailComponent } from './emaillog/emaillog-detail/emaillog-detail.component';





import { AuthGuard } from '@hicoder/angular-auth';




export const emailtemplateRoutingPath = [
    {path: 'list', component: EmailtemplateListComponent, canActivate: [AuthGuard]},
     {path: 'detail/:id', component: EmailtemplateDetailComponent, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: EmailtemplateEditComponent, canActivate: [AuthGuard]},
    {path: 'new', component: EmailtemplateEditComponent, canActivate: [AuthGuard]},
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const emailsettingsRoutingPath = [
    {path: 'list', component: EmailsettingsListComponent, canActivate: [AuthGuard]},
     {path: 'detail/:id', component: EmailsettingsDetailComponent, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: EmailsettingsEditComponent, canActivate: [AuthGuard]},
    
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const emaillogRoutingPath = [
    {path: 'list', component: EmaillogListComponent, canActivate: [AuthGuard]},
     {path: 'detail/:id', component: EmaillogDetailComponent, canActivate: [AuthGuard]},
    
    
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

