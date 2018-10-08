import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LogComponent} from './log/log.component';
import {ConfigerComponent} from './configer/configer.component';
import {TransfersComponent} from './transfers/transfers.component';
import {LoginComponent} from './login/login.component';
import {SummryComponent} from './summry/summry.component';
import {LogoutComponent} from './logout/logout.component';

const routes: Routes = [
  {path: 'log', component: LogComponent},
  {path: 'transfer', component: TransfersComponent},
  {path: 'change-password', component: LoginComponent},
  {path: 'change-terminal', component: ConfigerComponent},
  {path: 'login', component: LoginComponent},
  {path: '' , component: LogComponent},
  {path: 'summary', component: SummryComponent},
  {path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
