


const btn_calcular = document.querySelector("#btn_calcular")



function calcular() {
    
    alert("Executou");

    const campoNota1 = document.querySelector('nota1')

    let nota1 = parseFloat(campoNota1.value);

}


btn_calcular.addEventListener('Click', calcular);


// const lista = []
    const lista = Array();

    lista[0] = prompt("Informe número 1");
    lista[1] = prompt("Informe número 2");
    lista[2] = prompt("Informe número 3");
    lista[3] = prompt("Informe número 4");


    lista.push(60);
    lista.push(70);
    lista.push(80);


    console.log(lista);
    lista.unshift("Carlos");

    console.log(lista);




    //CONST NOTAS
        const NOTAS = [];
        notas[0] = prompt("Nota 1");
        notas[1] = prompt("Nota 2");
        notas[2] = prompt("Nota 3");
        notas[3] = prompt("Nota 4");


        //TAMANHO DO ARRAY
        console.log(notas.length);

    //FOR
    
    for(let posicao = 0; posicao <= notas.length; posicao++) {
        let valor = notas[posicao];
        //FAZER TRATAMENTO DE VIRGULA PARA PONTO
        valor = valor.replace(',','.');
        valor = parseFloat(valor);
        notas[posicao] = valor;
    }

    // EXIBIR POSIÇÃO E NOTAS EM ORDEM
    for(let posicao = 0; posicao <= notas.length; posicao++) {
        console.log(posicao)
        console.log(notas[posicao]);
    }
    

    