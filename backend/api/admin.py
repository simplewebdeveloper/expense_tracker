# admin.py
from django.contrib import admin
from .models import ExpenseModel
from .models import CategoryModel

# Register your models here.
admin.site.register(ExpenseModel)
admin.site.register(CategoryModel)
