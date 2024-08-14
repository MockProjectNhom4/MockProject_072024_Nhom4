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