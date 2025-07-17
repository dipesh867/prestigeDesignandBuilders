from django.shortcuts import render,HttpResponse
from rest_framework import generics, permissions
from .models import Messages,Quotes,Image,Gallery,InteriorStyle,InteriorStyleImage
from rest_framework import status
from rest_framework.views import APIView
from .serializers import MessagesSerializer,QuotesSerializer,GallerySerializer,InteriorStyleSerializer
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from django.contrib.auth import authenticate, login,logout
from rest_framework.decorators import api_view
from django.views.decorators.csrf import ensure_csrf_cookie
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

# # Interior APIs
# class InteriorListView(generics.ListAPIView):
#     queryset = InteriorStyle.objects.all().order_by('-id')
#     serializer_class = InteriorSerializer

# class InteriorCreateView(generics.CreateAPIView):
#     queryset = InteriorStyle.objects.all()
#     serializer_class = InteriorSerializer

# class InteriorDeleteView(generics.DestroyAPIView):
#     queryset = InteriorStyle.objects.all()
#     serializer_class = InteriorSerializer
#     lookup_field = "pk"
#     permission_classes = []
#     authentication_classes = []

# InteriorStyle APIs
class InteriorStyleCreateView(generics.CreateAPIView):
    queryset = InteriorStyle.objects.all()
    serializer_class = InteriorStyleSerializer
    parser_classes = [MultiPartParser, FormParser]


class InteriorStyleListView(generics.ListAPIView):
    queryset = InteriorStyle.objects.all().order_by('-id')
    serializer_class = InteriorStyleSerializer


class InteriorStyleDeleteView(generics.DestroyAPIView):
    queryset = InteriorStyle.objects.all()
    serializer_class = InteriorStyleSerializer
    lookup_field = "pk"
    permission_classes = []
    authentication_classes = []



@api_view(['POST'])
def superuser_login(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(request, username=username, password=password)
    if user and user.is_superuser:
        login(request, user)  # Create session
        return Response({"detail": "Login successful", "is_superuser": True})
    return Response({"detail": "Invalid username or password"}, status=401)

@api_view(['POST'])
def superuser_logout(request):
    logout(request)
    return Response({"detail": "Logged out"})

@api_view(['GET'])
def user_profile(request):
    if request.user.is_authenticated and request.user.is_superuser:
        return Response({
            "username": request.user.username,
            "is_superuser": True,
        })
    return Response({"detail": "Unauthorized"}, status=401)
@ensure_csrf_cookie
@api_view(['GET'])
def get_csrf_token(request):
    return Response({'detail': 'CSRF cookie set'})

