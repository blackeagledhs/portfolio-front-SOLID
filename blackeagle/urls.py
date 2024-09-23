from django.urls import path
from .views import index, education, experience, project, extra, contact, submit_contact

urlpatterns = [
    path('', index, name='index'),
    path('education/', education, name='education'),
    path('experience/', experience, name='experience'),
    path('project/', project, name='project'),
    path('extra/', extra, name='extra'),
    path('contact/', contact, name='contact'),
    path('submit_contact/', submit_contact, name='submit_contact'),

]
