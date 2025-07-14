from django.urls import path
from .views import home, messageCreateView,messageListView,messageDeleteView
urlpatterns = [
    path('contact/', messageCreateView.as_view(), name='message-create'),
    path('contact/list/', messageListView.as_view(), name='list-messages'),
    path('contact/<int:pk>/', messageDeleteView.as_view(), name='delete-message'),
]
