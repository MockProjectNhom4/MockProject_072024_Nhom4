from . import views
from django.urls import path, include

urlpatterns = [
    path('', views.getRoutes, name="getRoutes"),
    path('contracts/', views.getContracts, name="getContracts"),
    path('contract/<int:pk>/', views.getContract, name="getContract"),
    path('createcontract/', views.createContract, name="createContract"),
    path('updatecontract/<int:pk>/', views.updateContract, name="updateContract"),
    path('deletecontract/<int:pk>/', views.deleteContract, name="deleteContract"),
]
