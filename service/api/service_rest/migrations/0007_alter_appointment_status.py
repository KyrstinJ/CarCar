# Generated by Django 4.0.3 on 2023-06-05 22:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0006_alter_appointment_technician'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='status',
            field=models.BooleanField(),
        ),
    ]
