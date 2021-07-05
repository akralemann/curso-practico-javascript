// Código del Cuadrado

console.group("Cuadrados")

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado (lado){
    return lado * 4;
}

// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado;
}

// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

// Código del Triangulo

console.group("Triangulo")

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log("Los lados del traingulo miden: " + ladoTriangulo1 + "cm " + ladoTriangulo2 + "cm " + baseTriangulo + "cm");

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de :" + alturaTriangulo + "cm ");

function perimetroTriangulo (lado1,lado2,lado3){
    return lado1 + lado2+ lado3;
}
// console.log("El perimetro del triangulo es de :" + perimetroTriangulo + "cm ");

function areaTriangulo(base,altura){
    return (base * altura) / 2;
}

// console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

// Código del Circulo

console.group("Circulo")

//Radio Circulo
// const radioCirculo = 4;
// console.log("El radio del circulo es " + radioCirculo + "cm");

//DiametroCirculo
function diametroCirculo(radio){
    return radio * 2;
}

// console.log("El diametro del circulo es " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
// console.log("PI es: " + pi);

//Circunferencia
function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//console.log("El perimetro del circulo es " + perimetroCirculo + "cm");

//Area
function areaCirculo (radio){
    return PI * (radio * radio);
}
// console.log("El area del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();

