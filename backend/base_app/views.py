from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

# For querying the database
# Called when the user goes to a certain page or takes a certain action

def dashboard(request):
    return HttpResponse('This is the main dashboard for EvryDay!')

def sleep(request):
    return HttpResponse('This is the sleep dashboard!')