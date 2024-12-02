# forms.py
from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import CustomUser

class UserRegistrationForm(UserCreationForm):
    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'password1', 'password2', 'role']

    def clean_role(self):
        role = self.cleaned_data.get('role')
        if role not in ['admin', 'user']:
            raise forms.ValidationError("Invalid role selected.")
        return role
