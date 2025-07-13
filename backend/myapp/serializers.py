from rest_framework import serializers
from .models import Messgaes

class MessagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Messgaes
        fields = '__all__'