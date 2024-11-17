from django.contrib import admin
from .models import Property, PropertyPhoto

class PropertyPhotoInline(admin.TabularInline):
    model = PropertyPhoto
    extra = 1  # Number of empty photo fields for adding more photos

class PropertyAdmin(admin.ModelAdmin):
    list_display = ('title', 'property_type', 'district', 'approved', 'publish_date')
    list_filter = ('property_type', 'approved', 'district')
    search_fields = ('title', 'description', 'address')
    actions = ['approve_properties']

    def approve_properties(self, request, queryset):
        queryset.update(approved=True)
        self.message_user(request, "Selected properties have been approved.")
    approve_properties.short_description = "Approve selected properties"

    inlines = [PropertyPhotoInline]

admin.site.register(Property, PropertyAdmin)
