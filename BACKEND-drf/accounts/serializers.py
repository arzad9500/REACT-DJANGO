from django.contrib.auth.models import User
from rest_framework import serializers

# first line 
# This line imports the User model provided by Django.
# User is a built-in model
# It handle authentication and authorization
# Stored in Django’s default database

class Userserializers (serializers.ModelSerializer):
    password =  serializers.CharField(write_only=True,style={"input_type":"password"}, min_length=8)
    class Meta:
        model =User
        fields =["username","email","password"]  # this is the order

    def validate_username(self, value): # check same username , it from frontend (doubt)
        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError("Username already exists")
        return value


    def create(self, validated_data):
        # User.objects. create = save the password in a plain text
        # User.objects.create_user = automatically hash the password in db
        user = User.objects.create_user(
        validated_data['username'],
        validated_data['email'], # , validated_data.get("email"),  # optional , if not get return none
        validated_data['password']
        )
        # user = User.objects.create_user(**validated_data)
        return user