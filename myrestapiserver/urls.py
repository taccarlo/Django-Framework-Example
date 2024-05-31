"""
URL configuration for myrestapiserver project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include,path
from rest_framework import routers
from subscription.views import SubscriptionViewSet, SubscriptionMostSuccessfulViewSet, SubscriptionMostSoldByDayViewSet, SubscriptionAPIView

"""
There are two mandatory arguments to the register() method:

    prefix - The URL prefix to use for this set of routes.
    viewset - The viewset class.

    Optionally, you may also specify an additional argument:

    basename - The base to use for the URL names that are created. If unset the basename will be automatically
    generated based on the queryset attribute of the viewset, if it has one. Note that if the viewset does not 
    include a queryset attribute then you must set basename when registering the viewse
"""
router = routers.SimpleRouter()
router.register('all', SubscriptionViewSet)
router.register('mostsuccessful', SubscriptionMostSuccessfulViewSet, basename='mostsuccessful_router') 
router.register('mostsoldbyday', SubscriptionMostSoldByDayViewSet, basename='soldperday_router') 
urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path("a/",
         SubscriptionAPIView.as_view(),
         name="list"),
]


