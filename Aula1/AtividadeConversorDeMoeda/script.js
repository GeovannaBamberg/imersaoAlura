document.getElementById("button-convert").onclick = function(){

    let valor = document.getElementById("barrinha-valor-real").value; 
    let convert = (parseFloat(valor/5.11)).toFixed(2);
    let resultado = document.querySelector('span');
    resultado.innerHTML= ( "R$"+valor+ " = U$"+convert );
    }
    
