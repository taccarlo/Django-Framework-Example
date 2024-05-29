from rest_framework import viewsets
from .serializers import SubscriptionSerializer, MostSuccessfulSerializer
from .models import Subscriptiondata
from django.db.models import Count, Sum

# This view return all data
class SubscriptionViewSet(viewsets.ModelViewSet):
    queryset = Subscriptiondata.objects.all()
    serializer_class = SubscriptionSerializer

# This view return all successfull data order by number of subscribers and revenue 
class SubscriptionMostSuccessfulViewSet(viewsets.ModelViewSet):
    
    date_from = "2023-09-18"
    date_to = "2023-09-18"
    queryset = Subscriptiondata.objects.all()
    # all tuples between date_from and date_to 
    #queryset = queryset.filter(starting_date__range=[date_from, date_to])

    # obtain the prod_desc ordered by number of count(*) and of sum(price)
    # SELECT prod_desc, COUNT(*) AS number, SUM(price) as revenue FROM subscriptions GROUP BY prod_desc ORDER BY number DESC, revenue DESC
    queryset = queryset.values('prod_desc').annotate(number=Count('prod_desc'), revenue=Sum('price')).order_by('-number', '-revenue')

    # first 20
    queryset = queryset[:50]
    serializer_class = MostSuccessfulSerializer

# This view return all successfull data order by number of subscribers for each day and revenue for each day
# Consegna: Dato un periodo temporale (data da-a), produrre una tabella con il numero 
# di abbonamenti attivi per ciascun giorno e i ricavi complessivi di quel giorno
class SubscriptionMostSoldByDayViewSet(viewsets.ModelViewSet):
    queryset = Subscriptiondata.objects.all()
    serializer_class = SubscriptionSerializer