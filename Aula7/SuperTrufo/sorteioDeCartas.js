var cartaMaquina;
var cartaJogador;

var bulbasauro = {
  nome: "Bulbasauro",
  atributos: {
    ataque: 5,
    defesa: 3,
    magia: 4
  }
};
var picachuu = {
  nome: "Picachuu",
  atributos: {
    ataque: 3,
    defesa: 2,
    magia: 8
  }
};

var eevee = {
  nome: "Eevee",
  atributos: {
    ataque: 8,
    defesa: 2,
    magia: 3
  }
};

var cartas = [bulbasauro, picachuu, eevee];

function sortearCarta() {
  var indiceDaCarta = parseInt(Math.random() * 3);
  cartaMaquina = cartas[indiceDaCarta];

  var indiceDaCartaJogador = parseInt(Math.random() * 3);
  cartaJogador = cartas[indiceDaCartaJogador];

  do {
    var indiceDaCartaJogador = parseInt(Math.random() * 3);
    cartaJogador = cartas[indiceDaCartaJogador];
  } while (indiceDaCartaJogador == indiceDaCarta);

  console.log(cartaMaquina);
  console.log(cartaJogador);

  var desativarBotaoSoteio = (document.getElementById(
    "btnSortear"
  ).disabled = true);
  var ativarBotaoJogar = (document.getElementById("btnJogar").disabled = false);

  opcoesNaTela();
}

function opcoesNaTela() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type= 'radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo;
  }
  opcoes.innerHTML = opcoesTexto;
}

function obterAtributosSelecionados() {
  var opcoesRadios = document.getElementsByName("atributo");

  for (var i = 0; i < opcoesRadios.length; i++) {
    if (opcoesRadios[i].checked == true) {
      console.log(opcoesRadios[i].value);
      return opcoesRadios[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obterAtributosSelecionados();
  var elementoResultado = document.getElementById("resultado")
  
  var valorCartaDaMaquina = (cartaMaquina.atributos[atributoSelecionado])
  var valorCartaDoJogador = (cartaJogador.atributos[atributoSelecionado])
  
  if (valorCartaDaMaquina < valorCartaDoJogador ){
    resultado.innerHTML("Você venceu esta partida")
  }
  else if (valorCartaDaMaquina > valorCartaDoJogador){
    resultado.innerHTML("Você PERDEU esta partida")
  }

  desativarBotaoSoteio = document.getElementById("btnSortear").disabled = false;
  ativarBotaoJogar = document.getElementById("btnJogar").disabled = true;
}