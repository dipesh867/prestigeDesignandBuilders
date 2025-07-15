from rest_framework import serializers
from .models import Messages,Quotes,Image

class MessagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Messages
        fields = '__all__'

class ImageSerializers(serializers.ModelSerializer):
    class Meta:
        model=Image
        fields = ['id','image']

class QuotesSerializer(serializers.ModelSerializer):
    images=ImageSerializers(many=True, required=False)
    class Meta:
        model=Quotes
        fields='__all__'
