from django.contrib import admin

# Register your models here.
from Pentagram.models import Photo
from Pentagram.models import Comments
from Pentagram.models import Likes

admin.site.register(Photo)
admin.site.register(Comments)
#admin.site.register(Likes)