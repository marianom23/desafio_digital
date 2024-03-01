/**
 * @license
 * Copyright 2024 Tu Empresa
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';

// Definición del bloque "Pregunta"
const askQuestionBlock = {
  'type': 'ask_question',
  'message0': 'Preguntar %1',
  'args0': [
    {
      'type': 'input_value',
      'name': 'QUESTION',
      'check': 'String',
      'text': '¿Cuál es tu pregunta?', // Texto predeterminado
    }
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 160,
  'tooltip': 'Este bloque solicita al usuario que ingrese una pregunta y almacena la respuesta en una variable.',
  'helpUrl': '',
};


// Crear las definiciones de bloque para los bloques en formato JSON.
// Esto no registra sus definiciones con Blockly.
// ¡Este archivo no tiene efectos secundarios!
export const blockPregunta = Blockly.common.createBlockDefinitionsFromJsonArray(
  [askQuestionBlock]
);
