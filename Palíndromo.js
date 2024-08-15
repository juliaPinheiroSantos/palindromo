let palavra = prompt("Digite uma palavra");
let palavra_invertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
  palavra_invertida += palavra[i];
}

if (palavra_invertida === palavra) {
  alert("É um palíndromo");
} else {
  alert("Não é um palíndromo");
}
