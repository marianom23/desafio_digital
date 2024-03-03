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
  const name = generator.valueToCode(block, 'nombre', generator.ORDER_ATOMIC) || '\'Mundo\'';

  const saludarFunction = generator.provideFunction_(
    'saludarFunction',
    `function ${generator.FUNCTION_NAME_PLACEHOLDER_}(nombre) {
  const outputDiv = document.getElementById('output');
  const textEl = document.createElement('p');
  textEl.innerText = 'Hola, ' + nombre + '!';
  outputDiv.appendChild(textEl);
}`
  );
  const code = `${saludarFunction}(${name});\n`;
  return code;
};

forBlock['sumar'] = function (block, generator) {
  const code1 = generator.valueToCode(block, 'numeroA', generator.ORDER_ATOMIC) || '0';
  const code2 = generator.valueToCode(block, 'numeroB', generator.ORDER_ATOMIC) || '0';
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
  const code = `${sumarFunction}(${code1}, ${code2});\n`;
  return code;
};


forBlock['preguntar'] = function (block, generator) {
  const preguntaFunction = generator.provideFunction_(
      'preguntaFunction',
      `function ${generator.FUNCTION_NAME_PLACEHOLDER_}() {
  return prompt('Ingrese un valor:');
}`
  );
  const code = `${preguntaFunction}()`;
  return [code, generator.ORDER_ATOMIC];
};