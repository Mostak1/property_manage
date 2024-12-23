
from django.contrib import admin
from django.urls import path
from Bizmax import views
from django.conf import settings
from django.conf.urls.static import static
from . import views
from .views import register
urlpatterns = [
    path('admin/', admin.site.urls),
    path('admin/login/', views.admin_login, name='admin_login'),
    path('user/login/', views.user_login, name='user_login'),
    path('admin/dashboard/', views.admin_dashboard, name='admin_dashboard'),
    path('user/dashboard/', views.user_dashboard, name='user_dashboard'),
    path('register/', register, name='register'),
    path('', views.insurance), 
    path('index', views.insurance),
    path('about', views.about),
    path('blog-details', views.blogDetails),
    path('blog-grid', views.blogGrid),
    path('blog-list-with-sidebar', views.blogListWithSidebar),
    path('business-with-ecommerce', views.businessWithEcommerce),
    path('consulting', views.consulting),
    path('contact', views.contact),
    path('corporate', views.corporate),
    path('finance', views.finance),
    path('insurance', views.insurance),
    path('portfolio', views.portfolio),
    path('pricing', views.pricing),
    path('project-details', views.projectDetails),
    path('service', views.service),
    path('services-details', views.servicesDetails),
    path('shop-cart', views.shopCart),
    path('shop-checkout', views.shopCheckout),
    path('shop-order-recived', views.shopOrderRecived),
    path('shop-product-details', views.shopProductDetails),
    path('shop', views.shop),
    path('team-details', views.teamDetails),
    path('team', views.team),

    path('properties/', views.property_list, name='property_list'),
    path('properties/<int:pk>/', views.property_detail, name='property_detail'),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)