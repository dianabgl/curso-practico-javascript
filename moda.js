const lista1 = [
    1,2,3,1,2,3,4,2,2,1,1,1,2,2,4
]

function moda(lista){

    const listaCount = {};

    lista.map(
        function(elemento){
           if (listaCount[elemento]) {
               listaCount[elemento] += 1;
           }
           else {
               listaCount[elemento] = 1;
           }          
        }
    );

    const listaCountArray = Object.entries(listaCount).sort(
        function (elementoA, elementoB){
            return elementoA[1] - elementoB[1];
        }
    );

    const moda = listaCountArray[listaCountArray.length - 1];

    return moda;
}

