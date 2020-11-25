"use strict";

/*EJERICIOS TEMA 2.4 DE ADALAB. FUNCIONES DE JS*/
/*EJERCICIO 1*/

/* function test(a, b) {
 return a * b;
}
const multi = test(3, 8);
console.log(multi);
const painting = document.querySelector(".practice");
painting.innerHTML = `This is my result = ${multi}`;

/*EJERCICIO 2*/
/*function test2(a, b, c, d) {
return (a + b + c + d) / 4;
}
const divided = test2(4, 4, 4, 4);
const painting2 = document.querySelector(".practice2");
painting2.innerHTML = `This is my result = ${divided}`;

/*EJERCICIO 3*/
/*function total(a, b) {
  return "Precio sin Iva= " + a + " IVA= " + b + " Total= " + a * b;
}

const prize = total(10, 2.1);

const painting3 = document.querySelector(".practice3");
painting3.innerHTML = prize;


/*EJERCICIO 4*/
/*function checkNumber(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
const parImpar = checkNumber(5);
const painting4 = document.querySelector(".practice4");
painting4.innerHTML = `My number is true or false? ${parImpar}`;*/

/*EJERCICIO 5 y 6*/
/*function getEl(selector) {
  const element = document.querySelector(selector);
  if (element) {
    element.innerHTML = "existo";
  } else {
    console.error(
      `No existe ningún elemento con clase, id o tag llamado ${selector}`
    );
  }
}
const btnEl = getEl(".btn");
const practice4El = getEl(".practice4");

/*EJERCICIO 7*/

/*function getEl(selector) {
  const element = document.querySelector(selector);
  return element;
}
const numberParagraph = getEl(".number-paragraph");
const paragraphValue = parseInt(numberParagraph.innerHTML);

function checkNumber(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

if (checkNumber(paragraphValue)) {
  console.log("Este número es PAR");
} else {
  console.log("Este número es IMPAR");
}*/

/*EJERCICIO 8*/
/* modificamos una variable de ámbito global
let secretLetter = "y";
function mySecretLetter() {
  secretLetter = "x";
  return secretLetter;
}
console.log(mySecretLetter()); // devuelve "x"
console.log(secretLetter); // devuelve "x"*/

/*EJERCICIO 9*/

/*const btnEl = (selector) => {
  const element = document.querySelector(selector);
  if (element) {
    element.innerHTML = "existo";
  } else {
    console.error(
      `No existe ningún elemento con clase, id o tag llamado ${selector}`
    );
  }
};
console.log(btnEl(".btn"));*/

/*EJERCICIO 10*/

/*function boxCalculator(borderBox, width, padding, borderSize) {
  let totalWidth;
  if (borderBox === false) {
    totalWidth = width + padding * 2 + borderSize * 2;
  } else if (borderBox === true) {
    totalWidth = width;
  }

  return `El ancho del contenido es:  ${width}px y el ancho total de la caja es: ${totalWidth}px`;
}
let result1 = boxCalculator(true, 200, 20, 10);
let result2 = boxCalculator(false, 200, 20, 10);
console.log(result1);
console.log(result2);*/
