# Create your views here.
from django.http import HttpResponse,JsonResponse, FileResponse
from django.shortcuts import render
from django.views.generic import TemplateView
import json
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from forms.serializers import UserSerializer, GroupSerializer
import os

base = 'http://papertree.herokuapp.com'
# class-based
class HomePageView(TemplateView):
    def get(self, request, **kwargs):
        return render(request, 'index.html', context=None)


def UserDetailJson(request, id = id ):
    file = '/static/img/' + str(id)+'jpeg'
    return FileResponse(file)

def UserDetailPic(request):
    return FileResponse(open(os.path.dirname(os.path.realpath(__file__))+'/static/assets/prof.jpg', 'r') , content_type="image/jpg")


