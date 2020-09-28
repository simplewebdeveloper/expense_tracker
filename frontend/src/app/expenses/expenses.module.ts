import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateExpenseComponent } from './create-expense/create-expense.component';
import { ViewUpdateExpenseComponent } from './view-update-expense/view-update-expense.component';
import { ViewExpensesComponent } from './view-expenses/view-expenses.component';
import { DeleteExpenseComponent } from './delete-expense/delete-expense.component';
import { WeeklySpendingComponent } from './weekly-spending/weekly-spending.component';



@NgModule({
  declarations: [CreateExpenseComponent, ViewUpdateExpenseComponent, ViewExpensesComponent, DeleteExpenseComponent, WeeklySpendingComponent],
  imports: [
    CommonModule
  ]
})
export class ExpensesModule { }
