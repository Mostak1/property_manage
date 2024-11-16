from django.contrib.auth.models import AbstractUser
from django.db import models
from django.contrib.auth import get_user_model

# Choices for property type
PROPERTY_TYPES = [
    ('Land', 'Land'),
    ('Land with Building', 'Land with Building'),
    ('Apartment', 'Apartment'),
    ('Commercial Space', 'Commercial Space'),
]

class CustomUser(AbstractUser):
    phone = models.CharField(max_length=15, unique=True)
    district = models.CharField(max_length=100)
    address = models.TextField()

    def __str__(self):
        return self.username
    

class Property(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    area = models.DecimalField(max_digits=10, decimal_places=2)  # Area of land or apartment
    property_type = models.CharField(max_length=50, choices=PROPERTY_TYPES)
    address = models.CharField(max_length=255)
    district = models.CharField(max_length=100)
    division = models.CharField(max_length=100)
    photos = models.ImageField(upload_to='property_photos/', blank=True, null=True)
    publish_date = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)  # User who added the property
    approved = models.BooleanField(default=False)  # Admin approval flag

    def __str__(self):
        return self.title
