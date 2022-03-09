let numeroSecreto = parseInt(Math.random() * 11);
console.log(numeroSecreto);

function Chutar() {
  let chute = parseInt(document.getElementById("valor").value);
  let resultado = document.getElementById("resultado");
  if (numeroSecreto == chute) {
    resultado.innerHTML = "Você acertou o numero que eu estava pensando";
  } else if (chute > 10 || chute < 0) {
    resultado.innerHTML = "Hey! É de 0 a 10, tente outra vez.";
  } else {
    resultado.innerHTML = "Você errou";
  }
}

