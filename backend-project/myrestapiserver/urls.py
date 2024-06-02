
from django.contrib import admin
from django.urls import path
from subscription.views import SubscriptionAPIView

urlpatterns = [
    path("admin/", admin.site.urls),
    path("subscription/",
         SubscriptionAPIView.as_view(),
         name="list"),
]


