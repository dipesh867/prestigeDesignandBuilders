from rest_framework import serializers
from .models import Messages,Quotes,Image,Gallery,InteriorStyleImage,InteriorStyle

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


class InteriorStyleImageSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True)  # ensures URL is returned, not just the filename

    class Meta:
        model = InteriorStyleImage
        fields = ['id', 'image']

class InteriorStyleSerializer(serializers.ModelSerializer):
    images = InteriorStyleImageSerializer(many=True, required=False)

    class Meta:
        model = InteriorStyle
        fields = ['id', 'interior_name', 'description', 'budget', 'timeline', 'features', 'images']

    def create(self, validated_data):
        images_data = validated_data.pop('images', [])
        interior_style = InteriorStyle.objects.create(**validated_data)
        for image_data in images_data:
            InteriorStyleImage.objects.create(interior_style=interior_style, **image_data)
        return interior_style

    def to_internal_value(self, data):
        images = data.getlist('images') if hasattr(data, 'getlist') else data.get('images', [])
        ret = super().to_internal_value(data)
        if images:
            ret['images'] = [{'image': image} for image in images]
        return ret

