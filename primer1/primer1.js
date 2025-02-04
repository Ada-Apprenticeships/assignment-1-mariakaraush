function celsiusToFahrenheit(celsius) {
    return parseFloat(celsius) * 1.8 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    let convertedToCelsus = (fahrenheit - 32) / 1.8;
    console.log(typeof(Number(convertedToCelsus)));
    return Number((convertedToCelsus).toFixed(2));
}

function celsiusToKelvin(celsius) {
    let tempInKelvin = celsius + 273.15;
    return Number(tempInKelvin);
}

function fahrenheitToKelvin(fahrenheit) {
    let tempInKelvin = fahrenheitToCelsius(fahrenheit) + 273.15;
    return tempInKelvin;
}

function kelvinToCelsius(kelvin) {
    let tempInCelsius = kelvin - 273.15;
    return Number(tempInCelsius);
}

function kelvinToFahrenheit(kelvin) {
    let tempInFahrenheit = (kelvin - 273.15) * 1.8 + 32;
    return Number(tempInFahrenheit);
}


function temperatureConversion(temperature, fromScale, toScale){

    let nonNumericReg = ["", " ", null];
    if (isNaN(temperature) || nonNumericReg.includes(temperature)) {
        throw new Error("Invalid temperature input");
    } 

    parseFloat(temperature)

    fromScale = fromScale.toUpperCase();
    toScale = toScale.toUpperCase();

    let validScale = ['C', 'F', 'K'];

    if (!validScale.includes(fromScale) || !validScale.includes(toScale)) {
        throw new Error("Invalid conversion type or input scale");
    }
  
    let convertedTemp = fromScale == toScale ? Number(temperature) :
                        fromScale == 'C' && toScale =='F' ? celsiusToFahrenheit(temperature) :
                        fromScale == 'F' && toScale == 'C' ? fahrenheitToCelsius(temperature) :
                        fromScale == 'C' && toScale == 'K' ? celsiusToKelvin(temperature) :
                        fromScale == 'F' && toScale == 'K' ? fahrenheitToKelvin(temperature) :
                        fromScale == 'K' && toScale == 'C' ? kelvinToCelsius(temperature) :
                        kelvinToFahrenheit(temperature);

    return convertedTemp;
} 

console.log(temperatureConversion(22, 'C', 'k'));



export default temperatureConversion;




