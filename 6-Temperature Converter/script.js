
const display = document.getElementById("result");
const convertButton = document.getElementById("convert");
const resetButton = document.getElementById("reset");
let result;
let symbol;

//Convert and Display
function convert(){
    var fromValue = document.getElementById("fromUnit").value;
    var toValue = document.getElementById("toUnit").value;
    var input = parseFloat(document.getElementById("temperature").value);
    
    switch (fromValue) {
        case "Celcius":
            result = converter(input, toValue, fromValue);
            symbol = getSymbol(toValue);
            break;
        case "Fahrenheit":
            result = converter(input, toValue, fromValue);
            symbol = getSymbol(toValue);
            break;
        case "Kelvin":
            result = converter(input, toValue, fromValue);
            symbol = getSymbol(toValue);
            break; 
        case "Rankine":
            result = converter(input, toValue, fromValue);
            symbol = getSymbol(toValue);
            break;       
} 
printDisplay(input);  
}
//Calculate
function converter(input, toValue, fromValue){
    
    if(fromValue === "Celcius"){
        result = toValue === "Fahrenheit" 
                            ? ((input * (9/5)) + 32) 
                            :  toValue === "Kelvin" 
                            ? (input + 273.15)
                            :   toValue === "Rankine" 
                            ?  (((input * (9/5)) + 32) + 459.67)
                            :input; 
    } else if(fromValue === "Fahrenheit"){
        result = toValue === "Celcius" 
                            ? (input - 32) * (5 / 9) 
                            :  toValue === "Kelvin" 
                            ? (input - 32) * (5 / 9) + 273.15
                            :   toValue === "Rankine" 
                            ?  input + 459.67  
                            :input; 
    } else if (fromValue === "Kelvin") {
                            result = toValue === "Celcius"
                            ? input - 273.15  
                            : toValue === "Fahrenheit"
                            ? (input - 273.15) * (9 / 5) + 32  
                            : toValue === "Rankine"
                            ? input * (9 / 5)  
                            : input;  
    } else if (fromValue === "Rankine") {
                            result = toValue === "Celcius"
                            ? (input - 491.67) * (5 / 9)  
                            : toValue === "Fahrenheit"
                            ? input - 459.67  
                            : toValue === "Kelvin"
                            ? input * (5 / 9)  
                            : input;  
   
    }
    return result;
}
//Gets the Symbol
function getSymbol(toValue){

    symbol = toValue === "Fahrenheit" 
                ? "°F"
                :  toValue === "Kelvin" 
                ? "°K"
                :   toValue === "Rankine" 
                ?  "°R"
                : "°C"; 

    return symbol;
}
function catchUndefined(){
    if (input === "" || input === null) {
        alert("Please enter a valid temperature value.");
        return; 
    }
}

function printDisplay(input){
    if(isNaN(input)){
        alert("Please Input a Temperatur Value");
        display.value = "";
    } else{
        display.value = result+ " "+symbol;
    }  
}

//Main
//Conver Button
convertButton.addEventListener("click", function(event){
    event.preventDefault();

    convert();

});
//Reset Button
resetButton.addEventListener("click", function(event){
    event.preventDefault();

    display.value = "";
    document.getElementById("fromUnit").value = "Celcius";
    document.getElementById("toUnit").value = "Celcius";
    document.getElementById("temperature").value = "";
    

});
  
 