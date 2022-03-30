function converter(){
    let real = document.getElementById("valorDeEntrada").value;
    let select = document.getElementById("moedas");
    var opcaoValor = select.options[select.selectedIndex].value; 

    let dolar = 0.21
    let euro = 0.19
    let won = 254.46

    let resposta = document.getElementById("resposta");
    let conta 
    let valorSaida = `<input type="text" value="${conta}">`
    let labelSaida = `<label class= "resultado"> Resultado: </label>`
    if (opcaoValor=="dolar"){
         conta = (real*dolar).toFixed(2);
       valorSaida = `<input type="text" value="${conta}">`
        resposta.innerHTML=(valorSaida);
    } else if (opcaoValor=="euro"){
        conta = (real*euro).toFixed(2);
         valorSaida = `<input type="text" value="${conta}">`
         resposta.innerHTML=(valorSaida);
    } else{
        conta = (real*won).toFixed(2)
       valorSaida = `<input type="text" value="${conta}">`
       resposta.innerHTML=(valorSaida);
    }
}