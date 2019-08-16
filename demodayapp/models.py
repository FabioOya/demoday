from django.db import models
from django.db import models
# # Create your models here.

class Pessoa(models.Model):
   

    nome = models.CharField(
        max_length=255,
        verbose_name='Nome'
    )

    email = models.EmailField(
        max_length=30,
        verbose_name='E-mail'
    )

    assunto = models.TextField(
        max_length=30,
        verbose_name='Assunto'
    )

    mensagem = models.TextField(
        max_length=255,
        verbose_name='Mensagem'
    )

    
    data_de_criacao = models.DateTimeField(auto_now_add=True)
    ativo = models.BooleanField(default=True)

