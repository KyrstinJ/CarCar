# Generated by Django 4.0.3 on 2023-06-06 15:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0012_appointment_vip'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='appointment',
            name='vip',
        ),
    ]
