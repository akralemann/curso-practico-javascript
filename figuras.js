// Código del Cuadrado

console.group("Cuadrados")

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

// Código del Triangulo

console.group("Triangulo")

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los lados del traingulo miden: " + ladoTriangulo1 + "cm " + ladoTriangulo2 + "cm " + baseTriangulo + "cm");

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de :" + alturaTriangulo + "cm ");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es de :" + perimetroTriangulo + "cm ");

const areaTriangulo =  (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo + "cm^2");


console.groupEnd();

// Código del Circulo

console.group("Circulo")

//Radio Circulo
const radioCirculo = 4;
console.log("El radio del circulo es " + radioCirculo + "cm");

//DiametroCirculo
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es " + diametroCirculo + "cm");

//PI
const pi = Math.PI;
console.log("PI es: " + pi);

//Circunferencia
const perimetroCirculo = diametroCirculo * pi;
console.log("El perimetro del circulo es " + perimetroCirculo + "cm");

//Area
const areaCirculo = pi * (radioCirculo * radioCirculo);
console.log("El area del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();

