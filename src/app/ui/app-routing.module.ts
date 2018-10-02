import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LogComponent} from './log/log.component';
import {ConfigerComponent} from './configer/configer.component';
import {TransfersComponent} from './transfers/transfers.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: 'log', component: LogComponent},
  {path: 'transfer', component: TransfersComponent},
  {path: 'change-password', component: LoginComponent},
  {path: 'change-terminal', component: ConfigerComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
