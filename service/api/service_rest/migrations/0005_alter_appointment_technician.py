# Generated by Django 4.0.3 on 2023-06-05 22:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0004_appointment_date_time_alter_appointment_technician'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='technician',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='technician', to='service_rest.technician'),
        ),
    ]
