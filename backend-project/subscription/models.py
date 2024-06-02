from django.db import models

# Subscription model

class Subscriptiondata(models.Model):

    def __str__(self):
        return "Subscription n. " + self.ID_sub
        
    # The ID of the subscription
    ID_sub = models.CharField(max_length=200, primary_key=True)
    # The start of the subscription
    starting_date = models.DateField(blank=True,null=True)
    # The end of the subscription
    ending_date = models.DateField(blank=True,null=True)
    # The ID of the product
    ID_prod = models.CharField(max_length=200)
    # The description of the product
    prod_desc = models.CharField(max_length=500)
    # The price of the product
    price = models.FloatField()
    

class MostSuccessfuldata(models.Model):

    def __str__(self):
        return "Subscription n. " + self.prod_desc
        
    # The ID of the product
    ID_prod = models.CharField(max_length=200)
    # The description of the product
    prod_desc = models.CharField(max_length=500)
    # The revenue of the subscription
    revenue = models.FloatField()
    # The number of subscribers
    number = models.IntegerField()
