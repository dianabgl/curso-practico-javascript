function mediaAritmetica(lista){
      
    const sumaLista = lista.reduce(
       function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
       }
    );
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

const lista1 = [
    100,
    200,
    500,
    400000000,
    1, 
    50,
    150,
    4000    
];

function compareNumbers(a, b) {
    return a - b;
  }

function esPar(numero) {
   if (numero % 2 === 0){
       return true;
   } else {
       return false;
   }
}



function mediana(lista){

    //ordenar lista de números
    lista.sort(compareNumbers);

    const mitadLista = parseInt(lista.length / 2);

    let mediana;

    if ( esPar(lista.length) ){
        const elemento1 = lista[mitadLista];
        const elemento2 = lista[mitadLista - 1];
        const promedioElemento1y2 = mediaAritmetica([
             elemento1,
             elemento2
        ]);
        mediana = promedioElemento1y2;

    } else {
        mediana = lista[mitadLista];
    }

    return mediana;
}