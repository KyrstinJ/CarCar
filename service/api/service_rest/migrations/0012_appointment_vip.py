# Generated by Django 4.0.3 on 2023-06-06 15:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0011_alter_appointment_technician'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='vip',
            field=models.BooleanField(default=False),
        ),
    ]
