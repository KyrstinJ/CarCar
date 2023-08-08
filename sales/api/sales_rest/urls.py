from django.urls import path
from .views import (
    list_salespeople,
    delete_salespeople,
    list_customer,
    delete_customer,
    list_sales,
    delete_sale,
)

urlpatterns = [
    path("salespeople/", list_salespeople, name="list_salespeople"),
    path("salespeople/<int:id>/", delete_salespeople, name="delete_salespeople"),
    path("customers/", list_customer, name="list_customer"),
    path("customers/<int:id>/", delete_customer, name="delete_customer"),
    path("sales/", list_sales, name="list_sale"),
    path("sales/<int:id>/", delete_sale, name="delete_sale"),
]
