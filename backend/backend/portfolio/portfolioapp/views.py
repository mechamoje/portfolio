from django.shortcuts import render
from .models import Project
from .serializers import ProjectSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.


@api_view(['GET'])
def show_projects(request):
    projects = Project.objects.all()
    serialized = ProjectSerializer(projects, many=True)
    return Response(serialized.data)
