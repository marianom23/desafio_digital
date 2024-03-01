/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly';
import { blockSaludo } from './blocks/saludar';
import { blockPregunta } from './blocks/pregunta';
import { blockSumar } from './blocks/sumar';
import {forBlock} from './generators/javascript';
import {javascriptGenerator} from 'blockly/javascript';
import {save, load} from './serialization';
import {toolbox} from './toolbox';
import './index.css';

// Register the blocks and generator with Blockly
Blockly.common.defineBlocks(blockSumar);
Blockly.common.defineBlocks(blockSaludo);
Blockly.common.defineBlocks(blockPregunta);
Object.assign(javascriptGenerator.forBlock, forBlock);

// Set up UI elements and inject Blockly
const codeDiv = document.getElementById('generatedCode').firstChild;
const outputDiv = document.getElementById('output');
const blocklyDiv = document.getElementById('blocklyDiv');
const ws = Blockly.inject(blocklyDiv, {toolbox});

// Esta función resetea los divs de código y output, muestra el
// código generado del workspace, y evalúa el código.
// En una aplicación real, probablemente no deberías usar `eval`.
const runCode = () => {
  const code = javascriptGenerator.workspaceToCode(ws);
  codeDiv.innerText = code;

  outputDiv.innerHTML = '';

  eval(code);
};

// Load the initial state from storage and run the code.
load(ws);
runCode();

// Obtener referencia al botón
const runCodeButton = document.getElementById('runCodeButton');

// Asociar la función runCode al evento click del botón
runCodeButton.addEventListener('click', runCode);
