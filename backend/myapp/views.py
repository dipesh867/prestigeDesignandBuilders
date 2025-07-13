from django.shortcuts import render,HttpResponse
from rest_framework import generics
from .models import Messgaes
from .serializers import MessagesSerializer

# Create your views here.
def home(request):
    return HttpResponse("Welcome to the Home Page") 


class messageCreateView(generics.CreateAPIView):
    queryset = Messgaes.objects.all()
    serializer_class = MessagesSerializer