var primeiroValor = parseInt(prompt("Digite o primeiro valor:"))
var operacao = prompt("Digite: 1 para somar; 2 para subtrair; 3 para multiplicar; 4 para dividir")
var segundoValor = parseInt(prompt("Digite o segundo valor:"))
if (operacao == 1) {
  var resultado = primeiroValor + segundoValor
  document.write("<h2>" + primeiroValor +" + " + segundoValor + " = "+ resultado + "</h2>")
} else if (operacao == 2) {
  var resultado = primeiroValor - segundoValor
  document.write("<h2>" + primeiroValor +" - " + segundoValor + " = "+ resultado + "</h2>")
}  else if (operacao == 3) {
  var resultado = primeiroValor * segundoValor
  document.write("<h2>" + primeiroValor +" x " + segundoValor + " = "+ resultado + "</h2>")
}  else if (operacao == 4) {
  var resultado = primeiroValor / segundoValor
  document.write("<h2>" + primeiroValor +" / " + segundoValor + " = "+ resultado + "</h2>")
} else {
  document.write("<h2> OPÇÃO INVALIDA </H2>")
}
