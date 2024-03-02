// import * as Blockly from 'blockly/core';

// // Definición del bloque "Pregunta"
// const askQuestionBlock = {
//   'type': 'ask_question',
//   'message0': 'Preguntar %1',
//   'args0': [
//     {
//       'type': 'input_value',
//       'name': 'QUESTION',
//       'check': 'String',
//       'text': '¿Cuál es tu pregunta?', // Texto predeterminado
//     }
//   ],
//   'previousStatement': null,
//   'nextStatement': null,
//   'colour': 160,
//   'tooltip': 'Este bloque solicita al usuario que ingrese una pregunta y almacena la respuesta en una variable.',
//   'helpUrl': '',
// };


// const saludarV = {
//     'type': 'saludar',
//     'message0': 'Saludar a %1',
//     'args0': [
//       {
//         'type': 'input_value',
//         'name': 'NAME',
//         'check': 'String',
//         'text': 'Mundo', // Agrega 'Mundo' como nombre predeterminado
//       }
//     ],
//     'previousStatement': null,
//     'nextStatement': null,
//     'colour': 10,
//     'tooltip': '',
//     'helpUrl': '',
//   };


// const total = {
//   "type": "sumar",
//   "message0": "sumar %1 %2",
//   "args0": [
//     {
//       "type": "input_value",
//       "name": "numeroA",
//       "check": "Number",
//       "align": "RIGHT",
//       "text": "numero A"
//     },
//     {
//       "type": "input_value",
//       "name": "numeroB",
//       "check": "Number",
//       "align": "RIGHT",
//       "text": "numero B"
//     }
//   ],
//   "previousStatement": null,
//   "nextStatement": null,
//   "colour": 230,
//   "tooltip": "Suma dos números y muestra el resultado en un cuadro de alerta.",
//   "helpUrl": ""
// }


//   // Define the blocks array to be returned
// const blocks = [askQuestionBlock, saludarV, total];

// // Create block definitions from the blocks array
// export const blockDefinitions = Blockly.common.createBlockDefinitionsFromJsonArray(blocks);


import * as Blockly from 'blockly/core';

// const saludar = {
// "type": "saludar",
// "message0": "saludar %1",
// "args0": [
//   {
//     "type": "input_value",
//     "name": "NOMBRE",
//     "check": "String"
//   }
// ],
// "inputsInline": true,
// "previousStatement": null,
// "nextStatement": null,
// "colour": "#FF0000",
// "tooltip": "Saluda a alguien",
// "helpUrl": ""
// }

const saludar = Blockly.Blocks['saludar'] = {
  init: function() {
    this.appendValueInput("nombre")
        .setCheck("String")
        .appendField("saludar(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(false);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

const preguntar = Blockly.Blocks['preguntar'] = {
  init: function() {
    this.appendValueInput("pregunta")
        .setCheck("String")
        .appendField("preguntar(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(false);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

const sumar = Blockly.Blocks['sumar'] = {
  init: function() {
    this.appendValueInput("numeroA")
        .setCheck("Number")
        .appendField("sumar(");
    this.appendValueInput("numeroB")
        .setCheck("Number")
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(false);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};


    // Define the blocks array to be returned
const blocks = [sumar, preguntar, saludar];

// Create block definitions from the blocks array
export const blockDefinitions = Blockly.common.createBlockDefinitionsFromJsonArray(blocks);
