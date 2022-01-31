function farenheitToCelsius(farenheit) {
    let celsius = (farenheit - 32) * 5 / 9;
    return celsius;
}

let celsius = farenheitToCelsius(55);
console.log("Celsius: ", celsius);