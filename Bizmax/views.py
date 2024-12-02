from django.shortcuts import render
from django.shortcuts import render, get_object_or_404,redirect
from .models import Property

from django.contrib.auth import authenticate, login
# from django.shortcuts import redirect, render
from django.contrib.auth.decorators import login_required
from .forms import UserRegistrationForm


def register(request):
    if request.method == "POST":
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            if user.role == 'admin':
                return redirect('admin_dashboard')  # Replace with actual admin dashboard URL
            else:
                return redirect('user_dashboard')  # Replace with actual user dashboard URL
    else:
        form = UserRegistrationForm()
    return render(request, 'register.html', {'form': form})
def admin_login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user and user.is_staff:
            login(request, user)
            return redirect('admin_dashboard')
        else:
            return render(request, 'admin_login.html', {'error': 'Invalid credentials'})
    return render(request, 'admin_login.html')

def user_login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user and not user.is_staff:
            login(request, user)
            return redirect('user_dashboard')
        else:
            return render(request, 'user_login.html', {'error': 'Invalid credentials'})
    return render(request, 'user_login.html')
@login_required
def user_dashboard(request):
    if request.user.is_staff:
        return redirect('admin_dashboard')
    return render(request, 'user_dashboard.html')
@login_required
def admin_dashboard(request):
    if not request.user.is_staff:
        return redirect('user_dashboard')
    return render(request, 'admin_dashboard.html')

def index(request):
    return render(request, "index.html")

def about(request):
    return render(request, "about.html")
    
def blogDetails(request):
    return render(request, "blogDetails.html")
    
def blogGrid(request):
    return render(request, "blogGrid.html")
    
def blogListWithSidebar(request):
    return render(request, "blogListWithSidebar.html")
    
def businessWithEcommerce(request):
    return render(request, "businessWithEcommerce.html")
    
def consulting(request):
    return render(request, "consulting.html")
    
def contact(request):
    return render(request, "contact.html")
    
def corporate(request):
    return render(request, "corporate.html")
    
def finance(request):
    return render(request, "finance.html")
    
def insurance(request):
    return render(request, "insurance.html")
    
def portfolio(request):
    return render(request, "portfolio.html")
    
def pricing(request):
    return render(request, "pricing.html")
    
def projectDetails(request):
    return render(request, "projectDetails.html")
    
def service(request):
    return render(request, "service.html")
    
def servicesDetails(request):
    return render(request, "servicesDetails.html")
    
def shopCart(request):
    return render(request, "shopCart.html")
    
def shopCheckout(request):
    return render(request, "shopCheckout.html")
    
def shopOrderRecived(request):
    return render(request, "shopOrderRecived.html")
    
def shopProductDetails(request):
    return render(request, "shopProductDetails.html")
    
def shop(request):
    return render(request, "shop.html")
    
def teamDetails(request):
    return render(request, "teamDetails.html")
    
def team(request):
    return render(request, "team.html")
    

def property_list(request):
    # Fetch all approved properties
    properties = Property.objects.filter(approved=True)  # Ensure there's an `is_approved` field in your model
    return render(request, 'property_list2.html', {'properties': properties})

def property_detail(request, pk):
    # Fetch a single property by its primary key (ID)
    property_obj = get_object_or_404(Property, pk=pk)
    return render(request, 'property_detail2.html', {'property': property_obj})