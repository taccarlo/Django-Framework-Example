from django.db import models

# Subscription model

class Subscriptiondata(models.Model):
    # The ID of the subscription
    ID_sub = models.CharField(max_length=200)
    # The start of the subscription
    starting_date = models.DateTimeField
    # The end of the subscription
    ending_date = models.DateTimeField
    # The ID of the product
    ID_prod = models.CharField(max_length=200)
    # The description of the product
    prod_desc = models.CharField(max_length=500)
    # The price of the product
    price = models.FloatField()
