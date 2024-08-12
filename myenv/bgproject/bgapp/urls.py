from . import views
from django.urls import path, include

urlpatterns = [
    path('', views.getRoutes, name ="getRoutes"),
    path('contracts/', views.getContracts, name ="getContracts"),
    path('contract/<str:pk>', views.getContract, name ="getContract"),
]
