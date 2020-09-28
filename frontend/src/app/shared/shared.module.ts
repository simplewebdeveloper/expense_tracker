import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [TopNavigationComponent, FooterComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
