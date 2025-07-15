from django.shortcuts import render,HttpResponse
from rest_framework import generics, permissions
from .models import Messages,Quotes,Image
from rest_framework import status
from rest_framework.views import APIView
from .serializers import MessagesSerializer,QuotesSerializer
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
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
    permission_classes = []  
    authentication_classes = []



class QuoteCreateView(generics.CreateAPIView):
    queryset = Quotes.objects.all()
    serializer_class = QuotesSerializer
    parser_classes = [MultiPartParser, FormParser]


    def post(self, request, *args, **kwargs):
        images = request.FILES.getlist('images')  
        quote_serializer = QuotesSerializer(data=request.data)
        if quote_serializer.is_valid():
            quote = quote_serializer.save()
            for image in images:
                Image.objects.create(quote=quote, image=image)
            return Response(QuotesSerializer(quote).data, status=status.HTTP_201_CREATED)
        return Response(quote_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class quotesListView(generics.ListAPIView):
    queryset=Messages.objects.all().order_by('-id')
    serializer_class=MessagesSerializer

class quotesDeleteView(generics.DestroyAPIView):
    queryset = Messages.objects.all()
    serializer_class=MessagesSerializer
    lookup_field = "pk"
    permission_classes = []  # ← this disables any login requirement
    authentication_classes = []


