function adicionar() {
  var listaFilmes = [];
  var novoFilme = document.getElementById("novoFilme").value;
  listaFilmes.push(novoFilme);
  var imagens = document.getElementById("imagens");
  for (var i = 0; i < listaFilmes.length; i++) {
    imagens.insertAdjacentHTML(
      "afterbegin",
      "<img src=" + listaFilmes[i] + ">"
    );
  }
}