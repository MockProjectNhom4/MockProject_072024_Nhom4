from rest_framework import serializers
from .models import *

class ContractsSerializer(serializers.ModelSerializer):
    class Meta:
        model=TblContract
        fields='__all__'
        
class ContractDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model=TblContractDetail
        fields='__all__'
        
class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = TblFeedback
        fields = '__all__'
        
class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = TblPayment
        fields = '__all__'
        
class PaymentTransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = TblPaymentTransaction
        fields = '__all__'