# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-07-14 10:54
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Pentagram', '0004_auto_20160714_1334'),
    ]

    operations = [
        migrations.RenameField(
            model_name='comments',
            old_name='photoid',
            new_name='photo_id',
        ),
        migrations.RenameField(
            model_name='comments',
            old_name='user',
            new_name='user_id',
        ),
    ]
