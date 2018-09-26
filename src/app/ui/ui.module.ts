import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {SlidbarComponent} from './slidbar/slidbar.component';
import {ContentComponent} from './content/content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [LayoutComponent],
  declarations: [LayoutComponent, SlidbarComponent, ContentComponent]
})
export class UiModule {
}
