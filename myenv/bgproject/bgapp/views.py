from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializer import ContractsSerializer

from .models import *
# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    return Response('hello world')

@api_view(['GET'])
def getContracts(request):
    contracts = TblContract.objects.all()
    serializer = ContractsSerializer(contracts, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getContract(request, pk):
    contract = TblContract.objects.get(id=pk)
    serializer = ContractsSerializer(contract, many=False)
    return Response(serializer.data)