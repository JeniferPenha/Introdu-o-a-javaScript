var botaoAdicionar = document.querySelector("#adicionar-paciente");
	botaoAdicionar.addEventListener("click", function(Event){
		Event.preventDefault();
	
		var form = document.querySelector("#form-adiciona");
		// Extraindo informações do paciente do Form
		var paciente = obterInformacoesDoForm(form);
		
		//Cria TR e TD
		var pacienteTr = montaTr(paciente);
		
		var erro = validaPaciente(paciente);
		
		if(erro.length > 0){
			var mensagemErro = document.querySelector("mensagem-erro");
			mensagemnErro.textContent = erro;
			return;
		}
		
		//Adicionando paciente na tabelaS 
		var tabela = document.querySelector("#tabela-pacientes");
		
		tabela.appendChild(pacienteTr);
		
		form.reset();
		
});		

function obterInformacoesDoForm(form){
	
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
				
	}
	return paciente;
}
		
function montaTr(paciente){
	
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");
	
		pacienteTr.appendChild(montarTd(paciente.nome, "info-nome"));
		pacienteTr.appendChild(montarTd(paciente.peso, "info-peso"));
		pacienteTr.appendChild(montarTd(paciente.altura, "info-altura"));
		pacienteTr.appendChild(montarTd(paciente.gordura, "info-gordura"));
		pacienteTr.appendChild(montarTd(paciente.imc, "info-imc"));
		
	return pacienteTr;

}
function montarTd(dado, classe){
	
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);
	
	return td;
}

function validaPaciente(paciente){
	if(validaPeso(paciente.peso)){
	return;
}else{
	return "O peso é inválido";
}
}
