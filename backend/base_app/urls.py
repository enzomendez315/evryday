# This is the app's URLs file.

from django.urls import path
from . import views

urlpatterns = [
    path('', views.dashboard, name='dashboard'),
    path('sleep/', views.sleep, name='sleep'),
]