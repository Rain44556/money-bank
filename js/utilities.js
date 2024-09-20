/* common shared function work here*/

function getInputFieldValueById(id){
    // console.log("call");
    const inputsValue = document.getElementById(id).value;
    const inputsValueInNumber = parseFloat(inputsValue);
    return inputsValueInNumber;
}

function getTextFieldValueById(id){
    const textValues = document.getElementById(id).innerText;
    const textValuesInNumbers = parseFloat(textValues);
    return textValuesInNumbers;
}