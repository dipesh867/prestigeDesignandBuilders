from django.urls import path
from .views import home, messageCreateView,messageListView,messageDeleteView,QuoteCreateView, quotesListView, quotesDeleteView, \
    GalleryListView, GalleryCreateView, GalleryDeleteView, \
    InteriorStyleListView, InteriorStyleCreateView, InteriorStyleDeleteView,superuser_login,superuser_logout,user_profile,get_csrf_token
# from .views import InteriorListView, InteriorCreateView, InteriorDeleteView



urlpatterns = [
    path('contact/', messageCreateView.as_view(), name='message-create'),
    path('contact/list/', messageListView.as_view(), name='list-messages'),
    path('contact/<int:pk>/', messageDeleteView.as_view(), name='delete-message'),
    path('quotes/', QuoteCreateView.as_view(), name='quotes-create'),
    path('quotes/list/', quotesListView.as_view(), name='list-quotes'),
    path('quotes/<int:pk>/', quotesDeleteView.as_view(), name='delete-quotes'),

    # Gallery
    path('gallery/', GalleryCreateView.as_view(), name='gallery-create'),
    path('gallery/list/', GalleryListView.as_view(), name='gallery-list'),
    path('gallery/<int:pk>/', GalleryDeleteView.as_view(), name='gallery-delete'),

    # # Interior
    # path('interior/', InteriorCreateView.as_view(), name='interior-create'),
    # path('interior/list/', InteriorListView.as_view(), name='interior-list'),
    # path('interior/<int:pk>/', InteriorDeleteView.as_view(), name='interior-delete'),

    # InteriorStyle
    path('interior-style/', InteriorStyleCreateView.as_view(), name='interiorstyle-create'),
    path('interior-style/list/', InteriorStyleListView.as_view(), name='interiorstyle-list'),
    path('interior-style/<int:pk>/', InteriorStyleDeleteView.as_view(), name='interiorstyle-delete'),


     path('admin/login/', superuser_login),
    path('admin/logout/', superuser_logout),
    path('user/profile/', user_profile),
     path('csrf/', get_csrf_token)
]
