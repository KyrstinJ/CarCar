# Generated by Django 4.0.3 on 2023-06-06 15:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0013_remove_appointment_vip'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='vin_vip',
            field=models.BooleanField(default=False),
        ),
    ]
