function pegarValores()
{
	//click do botão pega os valores inputados
	var saldo = parseFloat(document.getElementById("valorFinanciamento").value);
	var txJuros = 
		parseFloat(document.getElementById("juros").value/100.0);
	var periodo = parseInt(document.getElementById("periodo").value);
	
	//define a string da div
	var div = document.getElementById("Resultado");
	
	//em caso de recalcular, limpa a div
	div.innerHTML = "";
	
	//valida inputs - mostra erro se invalidos, caso contrário, mostra tabela
	var valSal = validarInputs(saldo);
	var valTxj = validarInputs(txJuros);

	if (valSal && valTxj)
	{
		//Retornar div string se os inputs forem validos
		div.innerHTML += amortizar(saldo, txJuros, periodo);
	}
	else
	{
		//retornar erro se os inputs são invalidos
		div.innerHTML += "Verifique os valores fornecidos e tente novamente - valores invalidos.";
	}
}

/*
  Função de Amortização:
   Calcula os elementos necessarios ao financiamento usando os dados inputados pelo usuário
 então mostra cada parcela mensal amortizada
*/
function amortizar(saldo, txJuros, periodo)
{
    //Calcular a taxa de juros mensal
    //var jurosMensal = txJuros/12
	var jurosMensal = Math.pow(1.0 + txJuros, 1.0 / 12) -1.0;
	
	//Calcular o pagamento
    var pagamento = saldo / periodo
	    
	//Começar a construir o retorno da string para mostrar a tabela de amortização
    var resultado = "Valor do Financiamento: R$" + saldo.toFixed(2) +  "<br />" + 
        "Taxa de Juros: " + (txJuros*100).toFixed(2) +  "%<br />" +
        "Meses: " + periodo + "<br />" +
        "Amortização: R$" + pagamento.toFixed(2) + "<br />" +
        "Total pago: R$" + (pagamento * periodo).toFixed(2) + "<br /><br />";
        
    //adiciona linhas no header para tabela
	resultado += "<table border='1'><tr><th>Mês</th><th>Saldo</th>" + 
        "<th>Juros</th><th>Prestação</th>";
    
    /*
     Calcular os montantes mensais de amortização do financiamento e então retorna para a string
     */
	for (var count = 0; count < periodo; ++count)
	{ 
		//criar variavel juros
		var juros = 0;
		
		//criar variavel prestação
		var prestaçao = 0;
		
		//faz uma linha da tabela a cada prestação
		resultado += "<tr align=center>";
		
		//exibe o mes em coluna usando a variavel do ciclo
		resultado += "<td>" + (count + 1) + "</td>";
		
		
		//exibe o saldo
		resultado += "<td> R$" + saldo.toFixed(2) + "</td>";
		
		//calcula e exibe juros
		juros = saldo * jurosMensal;
		resultado += "<td> R$" + juros.toFixed(2) + "</td>";
		
		//calcula e exibe parcela mensal
		prestaçao = pagamento + juros;
		resultado += "<td> R$" + prestaçao.toFixed(2) + "</td>";
		
		//termina a linha da tabela	
		resultado += "</tr>";
		
		//atualiza o saldo para cada iteração
		saldo = saldo - prestaçao;		
	}
	
	//fecha a tabela
    resultado += "</table>";
	
	//retorna a string concatenada para a pagina
    return resultado;
}

function validarInputs(value)
{

	if ((value == null) || (value == ""))
	{
		return false;
	}
	else
	{
		return true;
	}
}