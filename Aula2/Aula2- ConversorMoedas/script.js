function converter(){
    let valor = document.getElementById ("valor").value
    let conversor = (valor*5.08).toFixed(2)
    let resultado = (document.getElementById("valorConvertido"))
    resultado.innerHTML = ("U$"+valor+" = R$" + conversor)

}