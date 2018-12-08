from django.conf.urls import url, include

from newapp import views

urlpatterns = [
    url('winners/', views.winner_list),
    
]