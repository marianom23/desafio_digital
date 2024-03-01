/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';

// Create a custom block called 'add_text' that adds
// text to the output div on the sample app.
// This is just an example and you should replace this with your
// own custom blocks.


const total = {
  "type": "sumar",
  "message0": "sumar %1 %2",
  "args0": [
    {
      "type": "input_value",
      "name": "numeroA",
      "check": "Number",
      "align": "RIGHT",
      "text": "numero A"
    },
    {
      "type": "input_value",
      "name": "numeroB",
      "check": "Number",
      "align": "RIGHT",
      "text": "numero B"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Suma dos números y muestra el resultado en un cuadro de alerta.",
  "helpUrl": ""
}



// Create the block definitions for the JSON-only blocks.
// This does not register their definitions with Blockly.
// This file has no side effects!
export const blockSumar = Blockly.common.createBlockDefinitionsFromJsonArray(
    [total]);

  