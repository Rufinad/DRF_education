# Generated by Django 4.1.7 on 2023-03-08 19:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("authors", "0001_initial"),
    ]

    operations = [
        migrations.RenameModel(
            old_name="Authors",
            new_name="Author",
        ),
    ]
