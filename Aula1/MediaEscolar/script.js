function notafinal(){
    let notaDoPrimeiroSemestre = parseFloat(document.getElementById("primeiroSemestre").value)
    let notaDoSegundoSemestre =  parseFloat(document.getElementById("segundoSemestre").value)
    let notaDoTerceiroSemestre = parseFloat(document.getElementById("terceiroSemestre").value)
    let notaDoQuartoSemestre =  parseFloat(document.getElementById("quartoSemestre").value)
    let notaFinal = ((notaDoPrimeiroSemestre+notaDoSegundoSemestre+notaDoTerceiroSemestre+notaDoQuartoSemestre)/4);
    let notaFixada = notaFinal.toFixed(2)
    let resultado = document.getElementById("resultado")

    if (notaFixada >= 7) {
        resultado.innerHTML = ("Sua média é: " + notaFixada + " você foi aprovada pela média");
    }

        else { 
            resultado.innerHTML = ("Sua média é: " + notaFixada+  " você foi reprovada pela média");
        }

    }
    
    
    
    // isto é um comentario. 
    // usei fuction para fazer a media.
    
    // revisão:
    // variaveis, strings, console.log, toFixed, operações matematias, concatenação, console.log, let, function.
    
    //desafio:
    // verficar se o aluno passou ou não de ano.
    //Estilizar o fundo da pagina;
    // escrever na pagina o que estamos escrevendo no console.
    // conversor de temperatura celsius a fareraid.
    //nota fixada com toda conta, divisão de media + tofixed