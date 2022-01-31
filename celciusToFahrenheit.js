// celsius to fahrenheit 

function celsiusToFahrenheit(celsius){
    var far=(celsius* 9/5)+32;
    return far;

}

let celsius=30;
let fahrenheit=celsiusToFahrenheit(celsius);
console.log(fahrenheit);

// fahrenheit to celsius
function fahrenheitToCelsius(fahrenheit2){
let celsius2=(fahrenheit2-32)*5/9;
return celsius2;

}

let fahrenheit2=100;
let celsius2=fahrenheitToCelsius(fahrenheit2)
console.log(celsius2)