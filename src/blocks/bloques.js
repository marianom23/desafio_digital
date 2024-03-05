import * as Blockly from 'blockly/core';


const saludar = Blockly.Blocks['saludar'] = {
  init: function() {
    this.appendValueInput("nombre")
        .setCheck(["String", "Text"])
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

saludar['domToMutation'] = function (xmlElement) {
  var pregunta = (xmlElement.getAttribute('pregunta') == 'true');
  if (pregunta && !this.getInput('nombre')) {
    this.appendValueInput("nombre")
        .setCheck(["String", "Text"])
        .appendField("nombre");
  }
};

const sumar = Blockly.Blocks['sumar'] = {
  init: function() {
    this.appendValueInput("numeroA")
        .setCheck(["Number", "Math_Number"])
        .appendField("sumar(");
    this.appendValueInput("numeroB")
        .setCheck(["Number", "Math_Number"])
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

sumar['domToMutation'] = function (xmlElement) {
  var preguntaA = (xmlElement.getAttribute('preguntaA') == 'true');
  var preguntaB = (xmlElement.getAttribute('preguntaB') == 'true');
  if (preguntaA && !this.getInput('numeroA')) {
    this.appendValueInput("numeroA")
        .setCheck(["Number", "Math_Number"])
        .appendField("numero A");
  }
  if (preguntaB && !this.getInput('numeroB')) {
    this.appendValueInput("numeroB")
        .setCheck(["Number", "Math_Number"])
        .appendField("numero B");
  }
};

const preguntar = Blockly.Blocks['preguntar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pedir valor con pregunta:");
    this.setOutput(true, ["String", "Number", "Math_Number"]);
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");

    // Agregar un campo de texto con valor predeterminado dentro del bloque de pregunta
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("Texto predeterminado"), "pregunta");
  }
};




    // Define the blocks array to be returned
const blocks = [sumar, preguntar, saludar];

// Create block definitions from the blocks array
export const blockDefinitions = Blockly.common.createBlockDefinitionsFromJsonArray(blocks);
