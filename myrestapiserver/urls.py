
from django.contrib import admin
from django.urls import include,path
from rest_framework import routers
from subscription.views import SubscriptionMostSuccessfulViewSet, SubscriptionAPIView

router = routers.SimpleRouter()
router.register('mostsuccessful', SubscriptionMostSuccessfulViewSet, basename='mostsuccessful_router') 
urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path("a/",
         SubscriptionAPIView.as_view(),
         name="list"),
]


