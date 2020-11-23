let inputName = 'MichAel'
let upperCaseInput = filterUpper(inputName)
let lowerCaseInput = filterLower(inputName)

function filterUpper (num){
  return num.split('').filter(n => n === n.toUpperCase()).length;
};

function filterLower (num){
  return num.length - upperCaseInput;
};

console.log((upperCaseInput > lowerCaseInput)?inputName.toUpperCase() : inputName.toLowerCase())