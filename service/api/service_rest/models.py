from django.db import models


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=200)
    sold = models.BooleanField


class Technician(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    employee_id = models.CharField(max_length=200, null=True)


class Appointment(models.Model):
    date_time = models.DateTimeField(null=True)
    reason = models.CharField(max_length=200)
    status = models.CharField(max_length=200, default="created")
    vin = models.CharField(max_length=200)
    customer = models.CharField(max_length=200)
    vin_vip = models.BooleanField(default=False)
    technician = models.ForeignKey(
        Technician,
        related_name="technician",
        on_delete=models.CASCADE
    )
