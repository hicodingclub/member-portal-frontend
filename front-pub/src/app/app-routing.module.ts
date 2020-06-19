import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@hicoder/angular-auth';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
    { path: '', component: HomepageComponent, canActivate: [AuthGuard]},
    { path: 'contact', component: ContactComponent},
    { path: 'membership', loadChildren: () => import('./membership/membership.module').then(m => m.MembershipModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: false})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
