const lista1 = [
    3,
    8,
    6,
    5,
    3
];

function mediorango(lista){

    lista.sort(
        function (a, b){
           return a - b;
        }
    );
    
    const minimo = lista[0];
    const maximo = lista[lista.length - 1];
    const mediorango = (minimo + maximo) / 2;

    return mediorango;
}
