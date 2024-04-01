from django.shortcuts import render

# Create your views here.

# For querying the database
# Called when the user goes to a certain page or takes a certain action

def dashboard(request):
    return render(request, 'dashboard.html')

def sleep(request):
    return render(request, 'sleep.html')