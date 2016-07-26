from django.contrib.auth.models import User
from rest_framework import serializers
from Pentagram.models import Photo
from Pentagram.models import Comments

class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = ('id', 'user', 'photo')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'email')

    def create(self, validated_data):
        user = User.objects.create(**validated_data)
        user.set_password(validated_data["password"])
        user.save()
        return user



#User.objects.find
class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ('id', 'user', 'photo_id','comment')
        def create(self, validated_data):
            comment = Comments.objects.create(**validated_data)
            return comment
# class LikeSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Like
#         fields = ('id', 'user', 'photo_id')
#     def create(self, validated_data):
#         like = Like.objects.create(**validated_data)
#         return like
