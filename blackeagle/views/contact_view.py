from django.shortcuts import render
import requests
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

def contact(request):
    return render(request, 'portfolio/contact.html')

@csrf_exempt
def submit_contact(request):
    if request.method == 'POST':
        data = {
            'full_name': request.POST.get('full_name'),
            'phone': request.POST.get('phone'),
            'email': request.POST.get('email'),
            'subject': request.POST.get('subject'),
            'message': request.POST.get('message')
        }
        response = requests.post('https://portfolioback-1-j3404097.deta.app/api/contact/', data=data)
        if response.status_code == 201:
            return JsonResponse({'message': 'Success'}, status=201)
        else:
            return JsonResponse({'message': 'Error'}, status=response.status_code)
    return JsonResponse({'message': 'Invalid request'}, status=400)
