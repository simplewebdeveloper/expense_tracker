// shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [TopNavigationComponent, FooterComponent, SideNavComponent],
  imports: [
    CommonModule,
  ],
  exports: [TopNavigationComponent, FooterComponent, SideNavComponent]
})
export class SharedModule { }
