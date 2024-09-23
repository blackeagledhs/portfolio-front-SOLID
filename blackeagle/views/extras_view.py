import requests
from django.shortcuts import render

def extra(request):
    try:
        extra_response = requests.get('https://portfolioback-1-j3404097.deta.app/api/extra/')
        extra_response.raise_for_status()
        extras = extra_response.json()
    except requests.RequestException as e:
        extras = []
        print(f"Error fetching extras: {e}")

    try:
        other_response = requests.get('https://portfolioback-1-j3404097.deta.app/api/other/')
        other_response.raise_for_status()
        others = other_response.json()
    except requests.RequestException as e:
        others = []
        print(f"Error fetching others: {e}")

    context = {
        'extras': extras,
        'others': others,
    }

    return render(request, 'portfolio/extra.html', context)
