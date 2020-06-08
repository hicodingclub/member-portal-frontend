import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@hicoder/angular-auth';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home',  component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'roles', loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule) },
  { path: 'files', loadChildren: () => import('./files/files.module').then(m => m.FilesModule) },
  { path: 'emailing', loadChildren: () => import('./emailing/emailing.module').then(m => m.EmailingModule) },
  { path: 'access', loadChildren: () => import('./access/access.module').then(m => m.AccessModule) },
  { path: 'membership', loadChildren: () => import('./membership/membership.module').then(m => m.MembershipModule) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
