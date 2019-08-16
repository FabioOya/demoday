from django.shortcuts import render, redirect
from demodayapp.models import Pessoa

# Create your views here.


def index(request):
        #essa página vai cadastrar uma pessoa
        contexto = {}
   
        return render(request, 'index.html', contexto)
        




def amortizacao(request):
    contexto = {
        
    }
    return render(request, 'amortizacao.html', contexto)



def faleconosco(request):
    return render(request, 'faleconosco.html')

def form(request):
    if request.method == 'POST':
        pessoa = Pessoa()
        #import pdb;pdb.set_trace()
        pessoa.nome = request.POST.get('nome')
        pessoa.email = request.POST.get('email')
        pessoa.assunto = request.POST.get('assunto')
        pessoa.mensagem = request.POST.get('mensagem')
        pessoa.save()
        contexto = {'msg': 'Duvida enviada'}
        print('faleconosco')
        return render(request, 'index.html')
