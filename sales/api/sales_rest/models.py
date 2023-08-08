from django.db import models


class Salesperson(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    employee_id = models.CharField(max_length=20, default=False)


class Customer(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    address = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=100)


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=200)
    sold = models.BooleanField(default=False)


class Sale(models.Model):
    price = models.DecimalField(max_digits=20, decimal_places=2)
    automobile = models.ForeignKey(
        AutomobileVO, related_name="automobilesales", on_delete=models.CASCADE
    )
    salesperson = models.ForeignKey(
        Salesperson, related_name="salespersonsales", on_delete=models.CASCADE
    )
    customer = models.ForeignKey(
        Customer, related_name="customersales", on_delete=models.CASCADE
    )
