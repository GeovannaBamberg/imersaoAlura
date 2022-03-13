
function media(){
    var primeiraNota = parseFloat(document.getElementById("PrimeiraNota").value);
    var segundaNota = parseFloat(document.getElementById("SegundaNota").value);
    var terceiraNota = parseFloat(document.getElementById("TerceiraNota").value);
    var resultado = document.getElementById("resultado");
    let calculoProvafinal =  ((7-((primeiraNota+segundaNota)/3))*3).toFixed(2);
    if (terceiraNota == 0){
        resultado.innerHTML = ("Nota que você precisa tirar na 3º nota é: " + calculoProvafinal ); 
    }
    else {
        resultado.innerHTML = ("Você ja fez a 3º prova? selecione: ' Nota Recuperação' " ); 
    }
}

function Recuperacao(){
var primeiraNota = parseFloat(document.getElementById("PrimeiraNota").value);
var segundaNota = parseFloat(document.getElementById("SegundaNota").value);
var terceiraNota = parseFloat(document.getElementById("TerceiraNota").value);
var resultado = document.getElementById("resultado");
let calculoRecuperacao =  ((50-((primeiraNota+segundaNota+terceiraNota)/3)*7)/3).toFixed(0);

if (calculoRecuperacao > 0) {
    resultado.innerHTML = ("A nota que você precisará alcançar na prova de recupeção é: " + calculoRecuperacao );
}
else {
    resultado.innerHTML = ("Não precisará fazer recuperação");
}
 
}