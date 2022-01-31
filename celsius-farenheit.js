function celsiusToFarenheit(celcius) {
    let farenheit = (celcius * 1.8) + 32;
    return farenheit;
}

let farenheit = celsiusToFarenheit(55);
console.log("Farenheit: ", farenheit);