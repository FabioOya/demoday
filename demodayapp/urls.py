from django.urls import path, include
from demodayapp.views import *

urlpatterns = [
    path('', index),
    path('amortizacao/', amortizacao),
    path('faleconosco/', faleconosco),
    path('form', form),
]
