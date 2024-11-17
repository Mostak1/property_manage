from django.db import models

class Property(models.Model):
    PROPERTY_TYPE_CHOICES = [
        ('land', 'Land'),
        ('land_with_building', 'Land with Building'),
        ('apartment', 'Apartment'),
        ('commercial_space', 'Commercial Space'),
    ]
    
    title = models.CharField(max_length=200)
    description = models.TextField()
    total_price = models.DecimalField(max_digits=12, decimal_places=2)
    area = models.DecimalField(max_digits=10, decimal_places=2, help_text="Area in square meters or feet")
    property_type = models.CharField(
        max_length=20,
        choices=PROPERTY_TYPE_CHOICES,
        default='land',
    )
    address = models.CharField(max_length=255)
    district = models.CharField(max_length=100)
    division = models.CharField(max_length=100)
    photos = models.ImageField(upload_to='property_photos/', blank=True, null=True)
    publish_date = models.DateTimeField(auto_now_add=True)
    approved = models.BooleanField(default=False, help_text="Admin needs to approve for publishing")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Property"
        verbose_name_plural = "Properties"

class PropertyPhoto(models.Model):
    property = models.ForeignKey(
        Property,
        on_delete=models.CASCADE,
        related_name="property_photos"  # Specify a unique reverse accessor name
    )
    photo = models.ImageField(upload_to="property_photos/")

