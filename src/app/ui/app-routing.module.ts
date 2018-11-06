import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService as AuthGuard} from '../service/auth-guard.service';

import {LogComponent} from './log/log.component';
import {ConfigerComponent} from './configer/configer.component';
import {TransfersComponent} from './transfers/transfers.component';
import {LoginComponent} from './login/login.component';
import {SummryComponent} from './summry/summry.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {LogoutComponent} from './logout/logout.component';

const routes: Routes = [
  {path: 'log', component: LogComponent , canActivate: [AuthGuard]},
  {path: 'transfer', component: TransfersComponent, canActivate: [AuthGuard]},
  {path: 'change-password', component: ChangePasswordComponent, canActivate: [AuthGuard]},
  {path: 'change-terminal', component: ConfigerComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: '', component: TransfersComponent, canActivate: [AuthGuard]},
  {path: 'summary', component: SummryComponent, canActivate: [AuthGuard]},
  {path: 'logout', component: LogoutComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
