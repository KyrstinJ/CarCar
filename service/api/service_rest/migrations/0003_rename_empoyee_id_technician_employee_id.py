# Generated by Django 4.0.3 on 2023-06-05 21:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0002_remove_automobilevo_sold'),
    ]

    operations = [
        migrations.RenameField(
            model_name='technician',
            old_name='empoyee_id',
            new_name='employee_id',
        ),
    ]
