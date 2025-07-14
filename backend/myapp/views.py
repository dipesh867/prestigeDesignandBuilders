from django.shortcuts import render,HttpResponse
from rest_framework import generics, permissions
from .models import Messages
from .serializers import MessagesSerializer

# Create your views here.
def home(request):
    return HttpResponse("Welcome to the Home Page") 


class messageCreateView(generics.CreateAPIView):
    queryset = Messages.objects.all()
    serializer_class = MessagesSerializer

class messageListView(generics.ListAPIView):
    queryset=Messages.objects.all().order_by('-id')
    serializer_class=MessagesSerializer

class messageDeleteView(generics.DestroyAPIView):
    queryset = Messages.objects.all()
    serializer_class = MessagesSerializer
    lookup_field = "pk"
    permission_classes = []  # ← this disables any login requirement
    authentication_classes = []   

