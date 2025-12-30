from django.shortcuts import render 
from .serializers import *
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response



class RegisterView (generics.CreateAPIView):

    queryset = User.objects.all() 
    serializer_class = Userserializers
    permission_classes = [AllowAny]     # can access by anyone


class ProtectedView (APIView):
    permission_classes = [IsAuthenticated]  # 

    def get(self, request):
        respon ={
            "status" : "request was permitted from backend"
        }
        return Response(respon)