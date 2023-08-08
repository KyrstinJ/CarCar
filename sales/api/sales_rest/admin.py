from django.contrib import admin
from .models import Salesperson, Customer, AutomobileVO, Sale

# Register your models here.
admin.site.register(Salesperson)
admin.site.register(Customer)
admin.site.register(AutomobileVO)
admin.site.register(Sale)
