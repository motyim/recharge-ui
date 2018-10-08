import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {SlidbarComponent} from './slidbar/slidbar.component';
import {ContentComponent} from './content/content.component';
import {LoginComponent} from './login/login.component';
import {ConfigerComponent} from './configer/configer.component';
import {TransfersComponent} from './transfers/transfers.component';
import {SummryComponent} from './summry/summry.component';
import {LogComponent} from './log/log.component';
import {SearchComponent} from './search/search.component';
import {TableComponent} from './table/table.component';
import {AppRoutingModule} from './app-routing.module';
import {FileSelectDirective} from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';
import {Ng2Webstorage} from 'ngx-webstorage';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    Ng2Webstorage
  ],
  exports: [LayoutComponent],
  declarations: [LayoutComponent, SlidbarComponent, ContentComponent, LoginComponent, ConfigerComponent, TransfersComponent, SummryComponent, LogComponent, SearchComponent, TableComponent, FileSelectDirective, LogoutComponent]
})
export class UiModule {
}
