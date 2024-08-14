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