// /**
//  * @license
//  * Copyright 2023 Google LLC
//  * SPDX-License-Identifier: Apache-2.0
//  */

// import {Order} from 'blockly/javascript';

// // Export all the code generators for our custom blocks,
// // but don't register them with Blockly yet.
// // This file has no side effects!
// export const forBlock = Object.create(null);

// // Generador de código para el bloque "Saludar"
// forBlock['saludar'] = function (block, generator) {
//   const name = generator.valueToCode(block, 'NAME', Order.NONE) || "'Mundo'";

//   const saludarV = generator.provideFunction_(
//     'saludarV',
//     `function ${generator.FUNCTION_NAME_PLACEHOLDER_}() {
//   var name;
//   do {
//     // Pedir al usuario que ingrese su nombre.
//     name = prompt('Ingrese su nombre:');
//     if (!name.trim()) {
//       alert('Por favor, ingrese un nombre válido.');
//     } else if (!isNaN(name)) {
//       alert('El nombre no puede ser un número. Por favor, ingrese un nombre válido.');
//     }
//   } while (!name || !isNaN(name) || name.trim() === ''); // Validar que no sea vacío, no sea un número y no contenga solo espacios en blanco.
  
//   // Saludar al nombre en el área de salida.
//   const outputDiv = document.getElementById('output');
//   const textEl = document.createElement('p');
//   textEl.innerText = 'Hola, ' + name + '!';
//   outputDiv.appendChild(textEl);
// }`
//   );
//   // Generar la llamada a la función para este bloque.
//   const code = `${saludarV}();\n`;
//   return code;
// };

// forBlock['preguntar'] = function (block, generator) {
//   const question = generator.valueToCode(block, 'QUESTION', Order.ATOMIC) || "'Ingrese la pregunta:'";

//   const askQuestion = generator.provideFunction_(
//       'askQuestion',
//       `function ${generator.FUNCTION_NAME_PLACEHOLDER_}() {
//   while (true) {
//     // Pedir al usuario que ingrese la pregunta.
//     var question = prompt(${question});
//     // Verificar que la pregunta no esté vacía.
//     if (question.trim() === '') {
//       alert('La pregunta no puede estar vacía.');
//       continue; // Volver a solicitar la pregunta si está vacía.
//     }
//     // Pedir al usuario que responda a la pregunta.
//     var answer = prompt(question);
//     // Verificar que la respuesta no esté vacía.
//     if (answer.trim() === '') {
//       alert('La respuesta no puede estar vacía.');
//       continue; // Volver a solicitar la respuesta si está vacía.
//     }
//     // Imprimir la pregunta y la respuesta en el área de salida.
//     const outputDiv = document.getElementById('output');
//     const textEl = document.createElement('p');
//     textEl.innerText = question + ' ' + answer;
//     outputDiv.appendChild(textEl);
//     break; // Salir del bucle si la pregunta y la respuesta no están vacías.
//   }
// }`
//   );
//   // Generar la llamada a la función para este bloque.
//   const code = `${askQuestion}();\n`;
//   return code;
// };




// forBlock['sumar'] = function (block, generator) {
//   // Generar la llamada a la función para solicitar el primer número.
//   const code1 = `var numeroA = prompt('Ingrese el primer número para sumar:');\n`;
//   // Generar la llamada a la función para solicitar el segundo número.
//   const code2 = `var numeroB = prompt('Ingrese el segundo número para sumar:');\n`;
  
//   const sumarFunction = generator.provideFunction_(
//       'sumarFunction',
//       `function ${generator.FUNCTION_NAME_PLACEHOLDER_}(numeroA, numeroB) {
//   // Verificar que los valores ingresados sean números y no estén vacíos.
//   if (isNaN(numeroA) || isNaN(numeroB) || numeroA.trim() === '' || numeroB.trim() === '') {
//     alert('Por favor, ingrese números válidos para realizar la suma.');
//     return;
//   }
  
//   // Realizar la suma.
//   var resultado = parseInt(numeroA) + parseInt(numeroB);
//   // Mostrar el resultado en un cuadro de alerta.
//   alert("El resultado de tu suma es: " + resultado);
//   // Imprimir el resultado en el área de salida.
//   const outputDiv = document.getElementById('output');
//   const textEl = document.createElement('p');
//   textEl.innerText = "El resultado de la suma es: " + resultado;
//   outputDiv.appendChild(textEl);
// }`
//   );

//   // Generar el código para solicitar los números y luego llamar a la función de suma.
//   const code = `${code1}${code2}${sumarFunction}(numeroA, numeroB);\n`;
//   return code;
// };


//////////////////////////////////////////////////////////////


/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {Order} from 'blockly/javascript';

// Export all the code generators for our custom blocks,
// but don't register them with Blockly yet.
// This file has no side effects!
export const forBlock = Object.create(null);


forBlock['saludar'] = function (block, generator) {
  const name = generator.valueToCode(block, 'NAME', Order.NONE) || "'Mundo'";

  const saludarV = generator.provideFunction_(
    'saludarV',
    `function ${generator.FUNCTION_NAME_PLACEHOLDER_}(nombre) {
  const outputDiv = document.getElementById('output');
  const textEl = document.createElement('p');
  textEl.innerText = 'Hola, ' + nombre + '!';
  outputDiv.appendChild(textEl);
}`
  );
  const code = `${saludarV}(${name});\n`;
  return code;
};

forBlock['preguntar'] = function (block, generator) {
  const question = generator.valueToCode(block, 'QUESTION', Order.ATOMIC) || "'Ingrese la pregunta:'";

  const askQuestion = generator.provideFunction_(
      'askQuestion',
      `function ${generator.FUNCTION_NAME_PLACEHOLDER_}() {
  const outputDiv = document.getElementById('output');
  const textEl = document.createElement('p');
  textEl.innerText = ${question};
  outputDiv.appendChild(textEl);
}`
  );
  const code = `${askQuestion}();\n`;
  return code;
};

forBlock['sumar'] = function (block, generator) {
  const code1 = `var numeroA = 0;\n`;
  const code2 = `var numeroB = 0;\n`;
  const sumarFunction = generator.provideFunction_(
      'sumarFunction',
      `function ${generator.FUNCTION_NAME_PLACEHOLDER_}(numeroA, numeroB) {
  var resultado = parseInt(numeroA) + parseInt(numeroB);
  const outputDiv = document.getElementById('output');
  const textEl = document.createElement('p');
  textEl.innerText = "El resultado de la suma es: " + resultado;
  outputDiv.appendChild(textEl);
}`
  );
  const code = `${code1}${code2}${sumarFunction}(numeroA, numeroB);\n`;
  return code;
};




/////////////////////////////////////////////////////////////


// import {Order} from 'blockly/javascript';
// import Blockly from 'blockly/core';
// // Export all the code generators for our custom blocks,
// // but don't register them with Blockly yet.
// // This file has no side effects!
// export const forBlock = Object.create(null);


// forBlock['saludar'] = function(block) {
//   // Generar el código para hacer la pregunta
//   var preguntaCode = Blockly.JavaScript.statementToCode(block, 'PREGUNTA');
  
//   // Utilizar el código de la pregunta para obtener el nombre del usuario
//   var code = preguntaCode;
//   code += 'var nombre = promptResult;\n';
  
//   // Generar el código para saludar utilizando el nombre obtenido
//   code += 'alert("¡Hola, " + nombre + "!");\n';
  
//   return code;
// };

// forBlock['preguntar'] = function(block) {
//   var pregunta = Blockly.JavaScript.valueToCode(block, 'PREGUNTA', Blockly.JavaScript.ORDER_ATOMIC);
//   var code = 'var promptResult = prompt(' + pregunta + ');\n';
//   return code;
// };


// forBlock['sumar'] = function(block) {
//   var numeroA = Blockly.JavaScript.valueToCode(block, 'NUMERO_A', Blockly.JavaScript.ORDER_ATOMIC);
//   var numeroB = Blockly.JavaScript.valueToCode(block, 'NUMERO_B', Blockly.JavaScript.ORDER_ATOMIC);
//   var code = 'var resultado = ' + numeroA + ' + ' + numeroB + ';\n';
//   code += 'alert("El resultado de tu suma es: " + resultado);\n';
//   return code;
// };