// Import components for each schema

import { AdditionalinfoListComponent } from './additionalinfo/additionalinfo-list/additionalinfo-list.component';

import { AdditionalinfoDetailComponent } from './additionalinfo/additionalinfo-detail/additionalinfo-detail.component';

import { AdditionalinfoEditComponent } from './additionalinfo/additionalinfo-edit/additionalinfo-edit.component';


import { BoardListComponent } from './board/board-list/board-list.component';






import { LeadListComponent } from './lead/lead-list/lead-list.component';







import { AuthGuard } from '@hicoder/angular-auth';




export const additionalinfoRoutingCorePath = [
    {path: 'list', component: AdditionalinfoListComponent, canActivate: [AuthGuard]},
    {path: 'detail/:id', component: AdditionalinfoDetailComponent, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: AdditionalinfoEditComponent, canActivate: [AuthGuard]},
    {path: 'new', component: AdditionalinfoEditComponent},
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const boardRoutingCorePath = [
    {path: 'list', component: BoardListComponent, canActivate: [AuthGuard]},
    
    
    
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const leadRoutingCorePath = [
    {path: 'list', component: LeadListComponent, canActivate: [AuthGuard]},
    
    
    
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

