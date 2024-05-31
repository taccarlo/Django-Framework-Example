from rest_framework import viewsets, status
from .serializers import SubscriptionSerializer, MostSuccessfulSerializer
from .models import Subscriptiondata
from django.db.models import Count, Sum
from rest_framework.views import APIView
from rest_framework.response import Response

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

class SubscriptionAPIView (APIView):

    def get(self, request, *args, **kwargs):
        '''
        List all the todo items for given requested user
        '''
        queryset = Subscriptiondata.objects.all()
        serializer = SubscriptionSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request, *args, **kwargs):
        '''
        Create the Todo with given todo data
        '''
        data = {
            'task': request.data.get('task'), 
            'completed': request.data.get('completed'), 
            'user': request.user.id
        }

        print("Ho ricevuto "+request.data.get("task"))
    
        queryset = Subscriptiondata.objects.all()
        serializer = SubscriptionSerializer(queryset, many=True)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)