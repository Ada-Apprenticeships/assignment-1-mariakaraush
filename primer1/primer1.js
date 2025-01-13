function temperatureConversion(temperature, fromScale, toScale){

// TODO: Validate the input:
//        - Check if the temperature is null, undefined, or a non-numeric string. If so, throw an error "Invalid temperature input".
    let nonNumericReg = ["", " ", null]
    if (isNaN(temperature) || nonNumericReg.includes(temperature)) {
        console.log("Invalid temperature input")
    } 

//        - Convert the temperature to a number.
        parseFloat(temperature)
//        - Normalise fromScale and toScale to uppercase.
        fromScale.toUpperCase();
        toScale.toUpperCase();
//        - Check if fromScale and toScale are valid ( e.g. 'C', 'F'). If not, throw an error "Invalid conversion type or input scale".
        let validScale = ['C', 'F'];

    if (!validScale.includes(fromScale) && !validScale.includes(toScale)) {
        console.log("Invalid conversion type or input scale")
    }

// TODO: Define helper functions for the conversions:
//        - toFahrenheit(celsius): Converts Celsius to Fahrenheit.
    function toFahrenheit(celsius) {
        return parseFloat(celsius) * 1.8 + 32
    }

    // console.log(toFahrenheit('20'))

//        - toCelsius(fahrenheit): Converts Fahrenheit to Celsius.
    function toCelsius(fahrenheit) {
     
        // console.log(fahrenheit - 32)
        let convertedToCelsus = (fahrenheit - 32) / 1.8
        console.log(typeof(Number(convertedToCelsus)))
        return Number((convertedToCelsus).toFixed(2))
    
    }
    console.log(toCelsius("-20"))

//        
// TODO: Implement the conversion logic:
//        - Use conditional logic to handle different toScale values (e.g. 'C', 'F').
    if (fromScale == 'C') {
        return toFahrenheit(temperature)
    }

    return toCelsius(temperature)
//        - Within each condition, handle conversions from different fromScale values (e.g. 'C', 'F') to the target toScale.
//        - Use the helper functions to perform the actual conversions.
   

}

console.log(temperatureConversion(20, 'C', "F"))



export default temperatureConversion;




