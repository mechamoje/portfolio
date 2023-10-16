from django.urls import path
from .views import show_projects

urlpatterns = [
    path('projects/', show_projects),
]
