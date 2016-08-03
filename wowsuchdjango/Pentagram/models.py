from django.conf import settings
from django.contrib.auth.models import User
from django.db import models
from uuid import uuid1

from django.db.models.signals import post_save
from django.dispatch.dispatcher import receiver
from rest_framework.authtoken.models import Token


# Create your models here.
class Photo(models.Model):
    user = models.ForeignKey(User)
    photo = models.ImageField()

class Comment(models.Model):
    photo_id = models.ForeignKey(Photo)
    user_id = models.ForeignKey(User)
    comment = models.CharField(max_length=500)

def photo_directory(instance, filename):
    return 'photos/use_{0}/{1}_{2}'.format(instance.user.username, str(uuid1()), filename)

class Like(models.Model):
    user_id = models.ForeignKey(User)
    photo_id = models.ForeignKey(Photo)

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
