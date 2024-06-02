from rest_framework import viewsets, status
from .serializers import SubscriptionSerializer, MostSuccessfulSerializer
from .models import Subscriptiondata
from django.db.models import Count, Sum
from rest_framework.views import APIView
from rest_framework.response import Response


# This view return all successfull data order by number of subscribers and revenue 
class SubscriptionMostSuccessfulViewSet(viewsets.ModelViewSet):
    
    serializer_class = MostSuccessfulSerializer


class SubscriptionAPIView (APIView):

    def get(self, request, *args, **kwargs):
        queryset = Subscriptiondata.objects.all()
        serializer = SubscriptionSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def __my_query(self, date_from, date_to):
        # obtain the prod_desc ordered by number of count(*) and of sum(price)
        queryset = Subscriptiondata.objects.all()
        # all tuples between date_from and date_to 
        queryset = queryset.filter(starting_date__range=[date_from, date_to])
        # SELECT prod_desc, COUNT(*) AS number, SUM(price) as revenue FROM subscriptions GROUP BY prod_desc ORDER BY number DESC, revenue DESC
        queryset = queryset.values('ID_prod','prod_desc').annotate(number=Count('prod_desc'), revenue=Sum('price')).order_by('-number', '-revenue')
        # first 20
        queryset = queryset[:50]
        return queryset
    
    def post(self, request, *args, **kwargs):
        
        date = {
            'from': request.data.get('from'), 
            'to': request.data.get('to'), 
        }
        print("Date selected", date["from"],  date["to"])
        
        queryset = self.__my_query(date["from"], date["to"])

        serializer = MostSuccessfulSerializer(queryset, many=True)
        #TODO: add check on serializer
        return Response(serializer.data, status=status.HTTP_200_OK)
    