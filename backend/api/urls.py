# api/urls.py
from django.urls import path
from .views import *

urlpatterns = [
    # Managing Expenses path
    path('manage/create', CreateExpenseView.as_view()),
    path('manage/view/single', ViewExpenseSingleView.as_view()),
    path('manage/edit/single', EditExpenseSingleView.as_view()),
    path('manage/view/all', ViewExpensesAllView.as_view()),
    path('manage/delete/single', DeleteExpenseSingleView.as_view()),

    # Generating Visuals path
    path('visuals/spending-by-category', SpendingByCategoryView.as_view()),
    path('visuals/weekly-spending', WeeklySpendingView.as_view()),
    path('visuals/monthly-spending', MonthlySpendingView.as_view()),
]
