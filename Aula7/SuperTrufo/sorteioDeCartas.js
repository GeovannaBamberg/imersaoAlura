var cartaMaquina;
var cartaJogador;

var chuu = {
  nome: "Chuu",
  imagem: "https://data.whicdn.com/images/340308911/original.png",
  atributos: {
    canto: 100,
    danca: 75,
    visual: 90
  }
};
var yves = {
  nome: "Yves",
  imagem: "https://data.whicdn.com/images/340308805/original.png",
  atributos: {
    canto: 85,
    danca: 100,
    visual: 95
  }
};
var olivia = {
  nome: "Olivia",
  imagem:
    "https://preview.redd.it/cfgdh2sr7go71.jpg?width=640&crop=smart&auto=webp&s=a2a16ac9e1f5e00b8f10340aba624bdb2aab7852",
  atributos: {
    canto: 70,
    danca: 90,
    visual: 90
  }
};
var gowon = {
  nome: "Gowon",
  imagem:
    "https://assets.mycast.io/actor_images/actor-gowon-176321_large.jpg?1613333065",
  atributos: {
    canto: 70,
    danca: 80,
    visual: 100
  }
};

var cartas = [gowon, olivia, yves, chuu];

function sortearCarta() {
  var indiceDaCarta = parseInt(Math.random() * 4);
  cartaMaquina = cartas[indiceDaCarta];

  var indiceDaCartaJogador = parseInt(Math.random() * 4);
  cartaJogador = cartas[indiceDaCartaJogador];

  do {
    var indiceDaCartaJogador = parseInt(Math.random() * 4);
    cartaJogador = cartas[indiceDaCartaJogador];
  } while (indiceDaCartaJogador == indiceDaCarta);

  var desativarBotaoSoteio = (document.getElementById(
    "btnSortear"
  ).disabled = true);
  var ativarBotaoJogar = (document.getElementById("btnJogar").disabled = false);

  exibirCartaJogador();
  exibirCartaMaquina();
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
  var elementoResultado = document.getElementById("resultado");

  var valorCartaDaMaquina = cartaMaquina.atributos[atributoSelecionado];
  var valorCartaDoJogador = cartaJogador.atributos[atributoSelecionado];

  if (valorCartaDaMaquina < valorCartaDoJogador) {
    htmlResultado = "<p class='resultado-final'> Venceu! </p>";
  } else if (valorCartaDaMaquina > valorCartaDoJogador) {
    htmlResultado = "<p class='resultado-final'> Perdeu! </p>";
  } else {
    htmlResultado = "<p class='resultado-final'> Empatou! </p>";
  }
  elementoResultado.innerHTML = htmlResultado;

  desativarBotaoSoteio = document.getElementById("btnSortear").disabled = false;
  ativarBotaoJogar = document.getElementById("btnJogar").disabled = true;
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';

  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type= 'radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome} </p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
   var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';

  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome} </p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}