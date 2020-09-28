import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpendingByCategoryComponent } from './spending-by-category/spending-by-category.component';
import { WeeklySpendingComponent } from './weekly-spending/weekly-spending.component';
import { MonthlySpendingComponent } from './monthly-spending/monthly-spending.component';



@NgModule({
  declarations: [SpendingByCategoryComponent, WeeklySpendingComponent, MonthlySpendingComponent],
  imports: [
    CommonModule
  ]
})
export class VisualsModule { }
