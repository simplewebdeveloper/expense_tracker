// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { ReactiveFormsModule } from '@angular/forms'

// custom module imports
import { SharedModule } from "../app/shared/shared.module";
import { VisualsModule } from "../app/visuals/visuals.module";
import { ExpensesModule } from "../app/expenses/expenses.module";
import { CategoriesModule } from "../app/categories/categories.module";

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: '../app/visuals/visuals.module#VisualsModule',
  },
  {
    path: 'expenses',
    loadChildren: '../app/expenses/expenses.module#ExpensesModule',
  },
  {
    path: 'categories',
    loadChildren: '../app/categories/categories.module#CategoriesModule',
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    VisualsModule,
    ExpensesModule,
    CategoriesModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
