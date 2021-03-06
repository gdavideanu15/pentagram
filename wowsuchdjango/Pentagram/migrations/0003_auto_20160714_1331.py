# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-07-14 10:31
from __future__ import unicode_literals

import django.contrib.auth.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Pentagram', '0002_comments'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comments',
            name='photoid',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Pentagram.Photo'),
        ),
        migrations.AlterField(
            model_name='comments',
            name='user',
            field=models.TextField(verbose_name=django.contrib.auth.models.User),
        ),
    ]
