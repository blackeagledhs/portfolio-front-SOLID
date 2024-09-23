import requests
from django.shortcuts import render

def index(request):
    try:
        about_response = requests.get('https://portfolioback-1-j3404097.deta.app/api/about/')
        about_response.raise_for_status()
        abouts = about_response.json()
    except requests.RequestException as e:
        abouts = []
        print(f"Error fetching abouts: {e}")

    try:
        badge_response = requests.get('https://portfolioback-1-j3404097.deta.app/api/badge/')
        badge_response.raise_for_status()
        badges = badge_response.json()
    except requests.RequestException as e:
        badges = []
        print(f"Error fetching badges: {e}")

    context = {
        'abouts': abouts,
        'badges': badges,
    }

    return render(request, 'portfolio/index.html', context)
