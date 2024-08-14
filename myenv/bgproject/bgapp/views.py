from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializer import *
from rest_framework.exceptions import NotFound
from rest_framework.pagination import PageNumberPagination
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend

from .models import *
# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    return Response('hello world')

#Contract
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

# Create
@api_view(['POST'])
def createContract(request):
    serializer = ContractsSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)

#Update
@api_view(['PUT'])
def updateContract(request, pk):
    contract = TblContract.objects.get(id=pk)
    serializer = ContractsSerializer(contract, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)

#Delete
@api_view(['DELETE'])
def deleteContract(request, pk):
    contract = TblContract.objects.get(id=pk)
    contract.delete()
    return Response(status=204)

@api_view(['GET'])
def getContract(request, pk):
    try:
        contract = TblContract.objects.get(id=pk)
    except TblContract.DoesNotExist:
        raise NotFound(detail="Contract not found", code=404)
    serializer = ContractsSerializer(contract, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getContracts(request):
    contracts = TblContract.objects.all()

    # Filtering and Sorting
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filtered_contracts = filter_backends[0]().filter_queryset(request, contracts, view=None)
    sorted_contracts = filter_backends[1]().filter_queryset(request, filtered_contracts, view=None)

    # Pagination
    paginator = PageNumberPagination()
    result_page = paginator.paginate_queryset(sorted_contracts, request)

    if result_page is not None:
        # Serialization
        serializer = ContractsSerializer(result_page, many=True)
        # Return paginated response
        return paginator.get_paginated_response(serializer.data)

    serializer = ContractsSerializer(sorted_contracts, many=True)
    return Response(serializer.data)

#Contract_Details
@api_view(['GET'])
def getContractDetails(request):
    contract_details = TblContractDetail.objects.all()
    serializer = ContractDetailSerializer(contract_details, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getContractDetail(request, pk):
    try:
        contract_detail = TblContractDetail.objects.get(id=pk)
    except TblContractDetail.DoesNotExist:
        raise NotFound(detail="Contract detail not found", code=404)
    serializer = ContractDetailSerializer(contract_detail, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def createContractDetail(request):
    serializer = ContractDetailSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)

@api_view(['PUT'])
def updateContractDetail(request, pk):
    try:
        contract_detail = TblContractDetail.objects.get(id=pk)
    except TblContractDetail.DoesNotExist:
        raise NotFound(detail="Contract detail not found", code=404)
    serializer = ContractDetailSerializer(contract_detail, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)

@api_view(['DELETE'])
def deleteContractDetail(request, pk):
    try:
        contract_detail = TblContractDetail.objects.get(id=pk)
    except TblContractDetail.DoesNotExist:
        raise NotFound(detail="Contract detail not found", code=404)
    contract_detail.delete()
    return Response(status=204)

#Feedback
@api_view(['GET'])
def getFeedbacks(request):
    feedbacks = TblFeedback.objects.all()
    serializer = FeedbackSerializer(feedbacks, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getFeedback(request, pk):
    try:
        feedback = TblFeedback.objects.get(id=pk)
    except TblFeedback.DoesNotExist:
        raise NotFound(detail="Feedback not found", code=404)
    serializer = FeedbackSerializer(feedback, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def createFeedback(request):
    serializer = FeedbackSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)

@api_view(['PUT'])
def updateFeedback(request, pk):
    try:
        feedback = TblFeedback.objects.get(id=pk)
    except TblFeedback.DoesNotExist:
        raise NotFound(detail="Feedback not found", code=404)
    serializer = FeedbackSerializer(feedback, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)

@api_view(['DELETE'])
def deleteFeedback(request, pk):
    try:
        feedback = TblFeedback.objects.get(id=pk)
    except TblFeedback.DoesNotExist:
        raise NotFound(detail="Feedback not found", code=404)
    feedback.delete()
    return Response(status=204)

#Feedback
@api_view(['GET'])
def getPayments(request):
    payments = TblPayment.objects.all()
    serializer = PaymentSerializer(payments, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getPayment(request, pk):
    try:
        payment = TblPayment.objects.get(id=pk)
    except TblPayment.DoesNotExist:
        raise NotFound(detail="Payment not found", code=404)
    serializer = PaymentSerializer(payment, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def createPayment(request):
    serializer = PaymentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)

@api_view(['PUT'])
def updatePayment(request, pk):
    try:
        payment = TblPayment.objects.get(id=pk)
    except TblPayment.DoesNotExist:
        raise NotFound(detail="Payment not found", code=404)
    serializer = PaymentSerializer(payment, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)

@api_view(['DELETE'])
def deletePayment(request, pk):
    try:
        payment = TblPayment.objects.get(id=pk)
    except TblPayment.DoesNotExist:
        raise NotFound(detail="Payment not found", code=404)
    payment.delete()
    return Response(status=204)