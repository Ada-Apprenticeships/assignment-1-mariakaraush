function celsiusToFahrenheit(celsius) {
    return `The temperature converted from Celsius in Fahrenheit is: ${parseFloat(celsius) * 1.8 + 32}`;
}

function fahrenheitToCelsius(fahrenheit) {
    let convertedToCelsus = (fahrenheit - 32) / 1.8;
    console.log(typeof(Number(convertedToCelsus)));
    return `The temperature converted from Fahrenheit in Celsius is: ${Number((convertedToCelsus).toFixed(2))}`;
}

function celsiusToKelvin(celsius) {
    let tempInKelvin = celsius + 273.15;
    return `The temperature converted from Celsius in Kelvin is: ${Number(tempInKelvin)}`;
}

function fahrenheitToKelvin(fahrenheit) {
    let tempInKelvin = fahrenheitToCelsius(fahrenheit) + 273.15;
    return `The temperature converted from Farenheit in Kelvin is: ${tempInKelvin}`;
}

function kelvinToCelsius(kelvin) {
    let tempInCelsius = kelvin - 273.15;
    return `The temperature converted from Kelvin in Celsius is:${Number(tempInCelsius)}`;
}

function kelvinToFahrenheit(kelvin) {
    let tempInFahrenheit = (kelvin - 273.15) * 1.8 + 32;
    return `The temperature converted from Kelvin in Fahrenheit is: ${Number(tempInFahrenheit)}`;
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




