// visuals.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualsComponent } from './visuals/visuals.component';
import { Routes, RouterModule } from "@angular/router";

const appRoutes: Routes = [
  {
    path: '',
    component: VisualsComponent,
  }
]

@NgModule({
  declarations: [VisualsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  exports: [VisualsComponent]
})
export class VisualsModule { }
