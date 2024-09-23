import requests
from django.shortcuts import render


def education(request):
    try:
        education_response = requests.get('https://portfolioback-1-j3404097.deta.app/api/education/')
        education_response.raise_for_status()
        educations = education_response.json()
    except requests.RequestException as e:
        educations = []
        print(f"Error fetching education: {e}")

    context = {
        'educations': educations,
    }

    return render(request, 'portfolio/education.html', context)
