


const btn_calcular = document.querySelector("#btn_calcular")



function calcular() {
    
    alert("Executou");

    const campoNota1 = document.querySelector('nota1')

    let nota1 = parseFloat(campoNota1.value);

}


btn_calcular.addEventListener('Click', calcular);
