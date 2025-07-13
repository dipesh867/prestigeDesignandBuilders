from django.urls import path
from .models import Messgaes
from .views import home, messageCreateView
urlpatterns = [
    path('contact/', messageCreateView.as_view(), name='message-create'),
]
