from rest_framework import serializers
from .models import TblContract

class ContractsSerializer(serializers.ModelSerializer):
    class Meta:
        model=TblContract
        fields='__all__'