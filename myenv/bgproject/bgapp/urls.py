from . import views
from django.urls import path, include
from django.urls import re_path
from rest_framework import permissions
from drf_yasg import openapi
from drf_yasg.views import get_schema_view


schema_view = get_schema_view(
   openapi.Info(
      title="Snippets API",
      default_version='v1',
      description="Test description",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="contact@snippets.local"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('', views.getRoutes, name="getRoutes"),
    
    path('swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    
    path('contracts/', views.getContracts, name="getContracts"),
    path('contract/<int:pk>/', views.getContract, name="getContract"),
    path('createcontract/', views.createContract, name="createContract"),
    path('updatecontract/<int:pk>/', views.updateContract, name="updateContract"),
    path('deletecontract/<int:pk>/', views.deleteContract, name="deleteContract"),
    
    path('contractdetails/', views.getContractDetails, name="getContractDetails"),
    path('contractdetail/<int:pk>/', views.getContractDetail, name="getContractDetail"),
    path('createcontractdetail/', views.createContractDetail, name="createContractDetail"),
    path('updatecontractdetail/<int:pk>/', views.updateContractDetail, name="updateContractDetail"),
    path('deletecontractdetail/<int:pk>/', views.deleteContractDetail, name="deleteContractDetail"),
    
    path('feedbacks/', views.getFeedbacks, name="getFeedbacks"),
    path('feedback/<int:pk>/', views.getFeedback, name="getFeedback"),
    path('createfeedback/', views.createFeedback, name="createFeedback"),
    path('updatefeedback/<int:pk>/', views.updateFeedback, name="updateFeedback"),
    path('deletefeedback/<int:pk>/', views.deleteFeedback, name="deleteFeedback"),
    
    path('payments/', views.getPayments, name="getPayments"),
    path('payment/<int:pk>/', views.getPayment, name="getPayment"),
    path('createpayment/', views.createPayment, name="createPayment"),
    path('updatepayment/<int:pk>/', views.updatePayment, name="updatePayment"),
    path('deletepayment/<int:pk>/', views.deletePayment, name="deletePayment"),
    
    path('paymenttransactions/', views.getPaymentTransactions, name="getPaymentTransactions"),
    path('paymenttransaction/<int:pk>/', views.getPaymentTransaction, name="getPaymentTransaction"),
    path('createpaymenttransaction/', views.createPaymentTransaction, name="createPaymentTransaction"),
    path('updatepaymenttransaction/<int:pk>/', views.updatePaymentTransaction, name="updatePaymentTransaction"),
    path('deletepaymenttransaction/<int:pk>/', views.deletePaymentTransaction, name="deletePaymentTransaction"),
]

