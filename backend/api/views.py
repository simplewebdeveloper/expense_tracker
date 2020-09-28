# views.py
from django.shortcuts import render
# rest_framework resources
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

# Create your views here.

# Create an expense
class CreateExpenseView(APIView):
    def get(self, request, *args, **kwargs):
        CreateExpenseViewResponse = {
            "CreateExpenseView": "CreateExpenseView"
        }
        print(CreateExpenseViewResponse)
        return Response(CreateExpenseViewResponse, status=status.HTTP_201_CREATED)

# View a single expense
class ViewExpenseSingleView(APIView):
    def get(self, request, *args, **kwargs):
        ViewExpenseSingleViewResponse = {
            "ViewExpenseSingleViewResponse": "ViewExpenseSingleViewResponse"
        }
        print(ViewExpenseSingleViewResponse)
        return Response(ViewExpenseSingleViewResponse, status=status.HTTP_201_CREATED)

# Edit a single expense
class EditExpenseSingleView(APIView):
    def get(self, request, *args, **kwargs):
        EditExpenseSingleViewResponse = {
            "EditExpenseSingleViewResponse": "EditExpenseSingleViewResponse"
        }
        print(EditExpenseSingleViewResponse)
        return Response(EditExpenseSingleViewResponse, status=status.HTTP_201_CREATED)

# View all expenses
class ViewExpensesAllView(APIView):
    def get(self, request, *args, **kwargs):
        ViewExpensesAllViewResponse = {
            "ViewExpensesAllViewResponse": "ViewExpensesAllViewResponse"
        }
        print(ViewExpensesAllViewResponse)
        return Response(ViewExpensesAllViewResponse, status=status.HTTP_201_CREATED)

# Delete a single expenses
class DeleteExpenseSingleView(APIView):
    def get(self, request, *args, **kwargs):
        DeleteExpenseSingleViewResponse = {
            "DeleteExpenseSingleViewResponse": "DeleteExpenseSingleViewResponse"
        }
        print(DeleteExpenseSingleViewResponse)
        return Response(DeleteExpenseSingleViewResponse, status=status.HTTP_201_CREATED)

## Visuals ##

# Spending by category
class SpendingByCategoryView(APIView):
    def get(self, request, *args, **kwargs):
        SpendingByCategoryViewResponse = {
            "SpendingByCategoryViewResponse": "SpendingByCategoryViewResponse"
        }
        print(SpendingByCategoryViewResponse)
        return Response(SpendingByCategoryViewResponse, status=status.HTTP_201_CREATED)

# Weekly spending
class WeeklySpendingView(APIView):
    def get(self, request, *args, **kwargs):
        WeeklySpendingViewResponse = {
            "WeeklySpendingViewResponse": "WeeklySpendingViewResponse"
        }
        print(WeeklySpendingViewResponse)
        return Response(WeeklySpendingViewResponse, status=status.HTTP_201_CREATED)

# Monthly spending
class MonthlySpendingView(APIView):
    def get(self, request, *args, **kwargs):
        MonthlySpendingViewResponse = {
            "MonthlySpendingViewResponse": "MonthlySpendingViewResponse"
        }
        print(MonthlySpendingViewResponse)
        return Response(MonthlySpendingViewResponse, status=status.HTTP_201_CREATED)