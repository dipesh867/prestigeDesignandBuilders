from django.shortcuts import render,HttpResponse
from rest_framework import generics, permissions
from .models import Messages,Quotes,Image,Gallery,Interior,InteriorStyle
from rest_framework import status
from rest_framework.views import APIView
from .serializers import MessagesSerializer,QuotesSerializer,GallerySerializer,InteriorSerializer,InteriorImageSerializer,InteriorStyleSerializer
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
    queryset=Quotes.objects.all().order_by('-id')
    serializer_class=QuotesSerializer

class quotesDeleteView(generics.DestroyAPIView):
    queryset = Quotes.objects.all()
    serializer_class=QuotesSerializer
    lookup_field = "pk"
    permission_classes = []  # ← this disables any login requirement
    authentication_classes = []

# Gallery APIs
class GalleryListView(generics.ListAPIView):
    queryset = Gallery.objects.all().order_by('-id')
    serializer_class = GallerySerializer

class GalleryCreateView(generics.CreateAPIView):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer

class GalleryDeleteView(generics.DestroyAPIView):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer
    lookup_field = "pk"
    permission_classes = []
    authentication_classes = []

# Interior APIs
class InteriorListView(generics.ListAPIView):
    queryset = Interior.objects.all().order_by('-id')
    serializer_class = InteriorSerializer

class InteriorCreateView(generics.CreateAPIView):
    queryset = Interior.objects.all()
    serializer_class = InteriorSerializer

class InteriorDeleteView(generics.DestroyAPIView):
    queryset = Interior.objects.all()
    serializer_class = InteriorSerializer
    lookup_field = "pk"
    permission_classes = []
    authentication_classes = []

# InteriorStyle APIs
class InteriorStyleListView(generics.ListAPIView):
    queryset = InteriorStyle.objects.all().order_by('-id')
    serializer_class = InteriorStyleSerializer

class InteriorStyleCreateView(generics.CreateAPIView):
    queryset = InteriorStyle.objects.all()
    serializer_class = InteriorStyleSerializer

class InteriorStyleDeleteView(generics.DestroyAPIView):
    queryset = InteriorStyle.objects.all()
    serializer_class = InteriorStyleSerializer
    lookup_field = "pk"
    permission_classes = []
    authentication_classes = []


