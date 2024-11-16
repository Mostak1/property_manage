from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import CustomUser
from .models import Property

class CustomUserCreationForm(UserCreationForm):
    phone = forms.CharField(max_length=15)
    district = forms.CharField(max_length=100)
    address = forms.CharField(widget=forms.Textarea)

    class Meta:
        model = CustomUser
        fields = ('username', 'email', 'phone', 'district', 'address')



class PropertyForm(forms.ModelForm):
    class Meta:
        model = Property
        fields = ['title', 'description', 'total_price', 'area', 'property_type', 'address', 'district', 'division', 'photos']

    photos = forms.ImageField(widget=forms.ClearableFileInput(attrs={'multiple': True}), required=False)
