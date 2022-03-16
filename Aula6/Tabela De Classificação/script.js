var rafa = { nome: "Rafa", vitorias: 5, empates: 2, derrotas: 3, pontos: 0 };
var paulo = { nome: "Paulo", vitorias: 2, empates: 2, derrotas: 6, pontos: 0 };
var geovanna = {
  nome: "Geovanna",
  vitorias: 5,
  empates: 0,
  derrotas: 5,
  pontos: 0
};

rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);
geovanna.pontos = calculaPontos(geovanna);

function calculaPontos(jogador) {
  var pontosJogador = jogador.vitorias * 3 + jogador.empates;

  return pontosJogador;
}

var jogadores = [rafa, paulo, geovanna];

function exibiJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td> <button onClick='adicionarDerrota(" +
      i +
      ")'>Derrota</button></td>";
    elemento += "</tr>";
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibiJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibiJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibiJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  jogador.pontos = calculaPontos(jogador);
  exibiJogadoresNaTela(jogadores);
}