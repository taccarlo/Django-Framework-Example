from django.shortcuts import render
from rest_framework import viewsets
from .serializers import SubscriptionSerializer
from .models import Subscriptiondata

# This view return all data

class SubscriptionViewSet(viewsets.ModelViewSet):
    queryset = Subscriptiondata.objects.all()
    serializer_class = SubscriptionSerializer

# This view return all successfull data order by number of subscribers and revenue 
class SubscriptionMostSuccessfulViewSet(viewsets.ModelViewSet):
    queryset = Subscriptiondata.objects.filter(prod_desc="ciao")
    serializer_class = SubscriptionSerializer

# This view return all successfull data order by number of subscribers for each day and revenue for each day
class SubscriptionMostSoldByDayViewSet(viewsets.ModelViewSet):
    queryset = Subscriptiondata.objects.filter(ID_prod="abbonamentoannuale")
    serializer_class = SubscriptionSerializer