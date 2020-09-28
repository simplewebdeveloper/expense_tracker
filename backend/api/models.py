# api/models.py
from django.db import models
# Create your models here.

class ExpenseModel(models.Model):
    expense_name = models.CharField(max_length=100)
    expense_description = models.CharField(max_length=1000)
    expense_category = models.CharField(max_length=256)
    expense_date = models.DateField(max_length=500, default='none')

    def __str__(self):
        return self.expense_name