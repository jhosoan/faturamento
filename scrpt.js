feather.replace();
var nem = document.getElementById("faturas");
var num = document.getElementById("nomes");
function cadpessoa(valor, nome) {
  if (nem.value === "" && num.value === "") {
    alert("inserir valores!!!");
  } else {
    var tabela = document.getElementById("tbpessoas");
    var qtdlinha = tabela.rows.length;
    var linha = tabela.insertRow(qtdlinha);

    var cellvalor = linha.insertCell(0);
    var cellnome = linha.insertCell(1);

    cellvalor.innerHTML = valor;
    cellnome.innerHTML = nome;
  }
}
