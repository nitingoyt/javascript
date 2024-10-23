let tempInput = document.getElementById("temperatureInput");
let fromUnit = document.getElementById("fromUnit");
let toUnit = document.getElementById("toUnit");
let convertButton = document.getElementById("Convert-button");

let tempFrom = "";
let tempTo = "";
let value = null;
let removeElement = "";

fromUnit.addEventListener("change", getFromUnit);
toUnit.addEventListener("change", getToUnit);
tempInput.addEventListener("keyup", (e) => (value = e.target.value));
convertButton.addEventListener("click", buttonHandler);

function getFromUnit(e) {
  if (removeElement) {
    toUnit.appendChild("removeElement");
  }
  let selectToValue = e.target.value.split("From");
  tempFrom = selectToValue;
  const terminatedNode = document.getElementById(selectToValue + "To");
  removeElement = terminatedNode;
  toUnit.removeChild(terminatedNode);
}

function getToUnit(e) {
  let selectToValue = e.target.value.split("To");
  tempTo = selectToValue;
}

function buttonHandler() {
  tempConvertor(value, tempFrom, tempTo);
}

function tempConvertor(value, from, to) {
  let result;
  let possibilities = {
    "celsius-fahrenheit": {
      formula: (celsius) => (celsius * 9) / 5 + 32,
    },
    "fahrenheit-celsius": {
      formula: (fahrenheit) => ((fahrenheit - 32) * 5) / 9,
    },
    "celsius-kelvin": {
      formula: (celsius) => celsius + 273.15,
    },
    "kelvin-celsius": {
      formula: (kelvin) => kelvin - 273.15,
    },
    "fahrenheit-kelvin": {
      formula: (fahrenheit) => ((fahrenheit - 32) * 5) / 9 + 273.15,
    },
    "kelvin-fahrenheit": {
      formula: (kelvin) => ((kelvin - 273.15) * 9) / 5 + 32,
    },
  };
  
  let sequence = from + "-" + to;
  result = possibilities[sequence].formula(Number(value)); // Convert the input value to a number
  console.log(result);
  document.getElementById("result").innerText = result;

  return result; // You can now return the result if needed
}
