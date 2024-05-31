from rest_framework import serializers
from .models import Subscriptiondata, MostSuccessfuldata

#Serializing the Subscription for generate json and xml api responses.
class SubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscriptiondata
        fields = ['ID_sub','starting_date','ending_date','ID_prod','prod_desc','price']

        
class MostSuccessfulSerializer(serializers.ModelSerializer):
    class Meta:
        model = MostSuccessfuldata
        fields = ['prod_desc','number','revenue' ]
