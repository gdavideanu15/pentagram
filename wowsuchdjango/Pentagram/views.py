from django.shortcuts import render

# Create your views here.
from django.shortcuts import render


from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from Pentagram.models import Photo

# Create your views here.
from Pentagram.serializers import PhotoSerializer, UserSerializer
from rest_framework.permissions import AllowAny

@api_view(['GET', 'POST'])
def photos(request):
    if request.method == "GET":
        photos = Photo.objects.all()
        serializer = PhotoSerializer(photos, many=True)
        return Response(status=status.HTTP_200_OK, data=serializer.data)
    if request.method == "POST":
        photo_serializer = PhotoSerializer(data=request.data)
        if photo_serializer.is_valid():
            photo_serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST, data=photo_serializer.errors)

@api_view(['POST'])
@permission_classes((AllowAny,))
def users(request):
    if request.method == "POST":
        user_serializer = UserSerializer(data=request.data)
        if user_serializer.is_valid():
            user_serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST, data=user_serializer.errors)

@api_view(['GET','POST'])
def comments(request, id_photo):
    if request.method == "GET":
        comments = Comment.objects.filter(photo_id=id_photo)
        serializer = CommentSerializer(comments, many=True)
        return Response(status=status.HTTP_200_OK, data=serializer.data)
    if request.method == "POST":
        comment_serializer = CommentSerializer(data=request.data)
        if comment_serializer.is_valid():
            comment_serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST, data=comment_serializer.errors)

@api_view(['GET','POST'])
def comments(request, id_photo):
    pass
