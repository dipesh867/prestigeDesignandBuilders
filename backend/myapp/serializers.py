from rest_framework import serializers
from .models import Messages,Quotes,Image,Gallery,Interior,InteriorImage,InteriorStyle

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

class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = '__all__'

class InteriorImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = InteriorImage
        fields = ['id', 'image']

class InteriorSerializer(serializers.ModelSerializer):
    images = InteriorImageSerializer(many=True, read_only=True)
    class Meta:
        model = Interior
        fields = '__all__'

class InteriorStyleSerializer(serializers.ModelSerializer):
    class Meta:
        model = InteriorStyle
        fields = '__all__'
