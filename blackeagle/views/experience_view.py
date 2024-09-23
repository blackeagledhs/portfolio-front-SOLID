import requests
from django.shortcuts import render


def experience(request):
    try:
        experience_response = requests.get('https://portfolioback-1-j3404097.deta.app/api/experience/')
        experience_response.raise_for_status()
        experiences = experience_response.json()
    except requests.RequestException as e:
        experiences = []
        print(f"Error fetching experience: {e}")

    context = {
        'experiences': experiences,
    }

    return render(request, 'portfolio/experience.html', context)
