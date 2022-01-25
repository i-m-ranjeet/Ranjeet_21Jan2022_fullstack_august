from django.urls import path
from . import views


urlpatterns = [
    path('products', views.products),
    path('add/<int:id>', views.add_to_cart),
    path('all',views.all),
    path('remove/<str:courseid>',views.remove),

    path('promos', views.promos),
]