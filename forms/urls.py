from django.conf.urls import url, include
from rest_framework import routers
from forms import views


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'paper', views.HomePageView.as_view()),
    # url(r'^paper/(?P<id>\d+)/$', views.UserDetailJson),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'adminpic',views.UserDetailPic),
    url(r'', views.HomePageView.as_view()),
]