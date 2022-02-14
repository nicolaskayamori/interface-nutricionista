var botaoAdicionar = document.querySelector("#adicionar-paciente");



botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  //Obtem novo paciente do formulário
  var paciente = obtemPacienteDoFormulario(form);

  //Cria a tr e a td do paciente
  
  var erros = validaPaciente(paciente);

  if (erros.length > 0) {
    exibeMensagensDeErro(erros);
    return;
  }

  adicionaPacienteNaTabela(paciente);

  form.reset();

  var mensagensErro = document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML = "";
});



function adicionaPacienteNaTabela(paciente){
  var pacienteTr = criaTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}



function obtemPacienteDoFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value),
  };
  return paciente;
}



function criaTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(criaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(criaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(criaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(criaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(criaTd(paciente.imc, "info-imc"));
  return pacienteTr;
}



function criaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}



function validaPaciente(paciente) {
  var erros = [];

  if (paciente.nome.length == 0) erros.push("O nome é inválido.");

  if (!validaPeso(paciente.peso)) erros.push("O peso é inválido.");

  if (!validaAltura(paciente.altura)) erros.push("A altura é inválida.");

  if (paciente.gordura.lenght == 0) erros.push("A gordura é inválida.");

  if (paciente.peso.length == 0) erros.push("O peso não pode estar em branco.");

  if (paciente.altura.length == 0)
    erros.push("O peso não pode estar em branco.");
  return erros;
}



function exibeMensagensDeErro(erros) {
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";
  erros.forEach(function (erro) {
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

