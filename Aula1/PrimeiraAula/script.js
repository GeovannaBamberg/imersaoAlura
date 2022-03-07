function nota(){
    let nome = "Geovanna";
    let notaDoPrimeiroSemestre = 8.5;
    let notaDoSegundoSemestre = 4.4;
    let notaDoTerceiroSemestre = 6.3;
    let notaDoQuartoSemestre = 6.7;
    let notaFinal = ((notaDoPrimeiroSemestre+notaDoSegundoSemestre+notaDoTerceiroSemestre+notaDoQuartoSemestre)/4);
    let notaFixada = notaFinal.toFixed(1)

    if (notaFixada > 7) {
        return console.log("Bem vinda " + nome + "sua média é: " + notaFixada + " você foi aprovada pela media");
    }

        else { 
            return console.log("Bem vinda " + nome + "sua média é: " + notaFixada+  " você foi reprovada pela media");
        }

    }
    
    console.log (nota ());
    
    
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