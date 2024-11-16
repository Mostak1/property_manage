from django.shortcuts import render
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import AuthenticationForm
from .forms import CustomUserCreationForm

# Registration View
def register(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('home')  # Redirect to the homepage or any other page
    else:
        form = CustomUserCreationForm()
    return render(request, 'registration/register.html', {'form': form})

# Login View
def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('home')  # Redirect to the homepage or any other page
    else:
        form = AuthenticationForm()
    return render(request, 'registration/login.html', {'form': form})

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
    

