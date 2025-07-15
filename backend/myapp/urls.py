from django.urls import path
from .views import home, messageCreateView,messageListView,messageDeleteView,QuoteCreateView, quotesListView, quotesDeleteView
urlpatterns = [
    path('contact/', messageCreateView.as_view(), name='message-create'),
    path('contact/list/', messageListView.as_view(), name='list-messages'),
    path('contact/<int:pk>/', messageDeleteView.as_view(), name='delete-message'),
    path('quotes/', QuoteCreateView.as_view(), name='quotes-create'),
    path('quotes/list/', quotesListView.as_view(), name='list-quotes'),
    path('quotes/<int:pk>/', quotesDeleteView.as_view(), name='delete-quotes'),
]
