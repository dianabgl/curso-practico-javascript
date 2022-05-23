// Código del cuadrado
console.group("Cuadrado");


function perimetroCuadrado(lado){
    return lado * 4;
} 


function areaCuadrado(lado){ 
    return lado * lado;
}

console.groupEnd();

// Código del triángulo
console.group("Triángulo");          

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 
           
function areaTriangulo(base, altura){
    return  (base * altura) / 2;
} 

function alturaTrianguloIsosceles(lado1, lado2, base){
    if (lado1 === lado2)
       return Math.sqrt(lado1 **2 - (base **2)/4);
    else 
       return 0;
}

console.groupEnd();

// Código del círculo
console.group("Círculo");
//const radioCirculo = 4;
//console.log("El radio del círculo es: " + radioCirculo + " cm");

function diametroCirculo(radio){
    return radio * 2;
}
//console.log("El diámetro del círculo es: " + diametroCirculo + " cm");

const PI = Math.PI;
console.log("PI es: " + PI);

function perimetroCirculo(radio){
   const diametro = diametroCirculo(radio);
   return diametro * PI;
} 
//console.log("El perímetro del círculo es: " + perimetroCirculo + " cm");

function areaCirculo(radio){
    return (radio * radio) * PI;
} 
//console.log("El área del círculo es: " + areaCirculo + " cm^2");

console.groupEnd();

//Aquí interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = areaCuadrado(value);
    alert(perimetro);
}

function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("InputTrianguloLado1");
    const valueLado1 = Number(inputLado1.value);

    const inputLado2 = document.getElementById("InputTrianguloLado2");
    const valueLado2 = Number(inputLado2.value);

    const inputBase = document.getElementById("InputTrianguloBase");
    const valueBase = Number(inputBase.value);

    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById("InputTrianguloBase");
    const valueBase = inputBase.value;

    const inputAltura = document.getElementById("InputTrianguloAltura");
    const valueAltura = inputAltura.value;

    const perimetro = areaTriangulo(valueBase, valueAltura);
    alert(perimetro);
}

function calcularAlturaTrianguloIsosceles(){
    const inputLado1 = document.getElementById("InputTrianguloLado1");
    const valueLado1 = Number(inputLado1.value);

    const inputLado2 = document.getElementById("InputTrianguloLado2");
    const valueLado2 = Number(inputLado2.value);

    const inputBase = document.getElementById("InputTrianguloBase");
    const valueBase = Number(inputBase.value);

    const altura = alturaTrianguloIsosceles(valueLado1, valueLado2, valueBase);
    if (altura == 0)
      alert("No es un triángulo isósceles!")
    else
      alert(altura);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = areaCirculo(value);
    alert(perimetro);
}