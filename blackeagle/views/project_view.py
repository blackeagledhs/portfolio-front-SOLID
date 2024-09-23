import requests
from django.shortcuts import render


def project(request):
    try:
        project_response = requests.get('https://portfolioback-1-j3404097.deta.app/api/projects/')
        project_response.raise_for_status()
        projects = project_response.json()
    except requests.RequestException as e:
        projects = []
        print(f"Error fetching project: {e}")

    context = {
        'projects': projects,
    }

    return render(request, 'portfolio/project.html', context)
