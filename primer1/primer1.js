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
        fromScale = fromScale.toUpperCase();
        toScale = toScale.toUpperCase();
//        - Check if fromScale and toScale are valid ( e.g. 'C', 'F'). If not, throw an error "Invalid conversion type or input scale".
        let validScale = ['C', 'F', 'K'];

    if (!validScale.includes(fromScale) && !validScale.includes(toScale)) {
        console.log("Invalid conversion type or input scale")
    }

// TODO: Define helper functions for the conversions:
//        - toFahrenheit(celsius): Converts Celsius to Fahrenheit.
    function celsiusToFahrenheit(celsius) {
        return parseFloat(celsius) * 1.8 + 32
    }

    // console.log(toFahrenheit('20'))

//        - toCelsius(fahrenheit): Converts Fahrenheit to Celsius.
    function fahrenheitToCelsius(fahrenheit) {
     
        // console.log(fahrenheit - 32)
        let convertedToCelsus = (fahrenheit - 32) / 1.8
        console.log(typeof(Number(convertedToCelsus)))
        return Number((convertedToCelsus).toFixed(2))
    
    }
    console.log(fahrenheitToCelsius("-20"))

    function celsiusToKelvin(celsius) {
        let tempInKelvin = celsius + 273.15
        return Number(tempInKelvin)
        }

    console.log(celsiusToKelvin(30))

    function fahrenheitToKelvin(fahrenheit) {
        let tempInKelvin = fahrenheitToCelsius(fahrenheit) + 273.15
        return tempInKelvin
    }
//        
// TODO: Implement the conversion logic:
//        - Use conditional logic to handle different toScale values (e.g. 'C', 'F').
    // if (fromScale == toScale) {
    //     return Number(temperature)
    // } if (fromScale == 'C' && toScale =='F') {
    //     return celsiusToFahrenheit(temperature)
    // } if (fromScale == 'F' && toScale == 'C') {
    //     return fahrenheitToCelsius(temperature)
    // } if (fromScale == 'C' && toScale == 'K') {
    //     return celsiusToKelvin(temperature)
    // } if (fromScale == 'F' && toScale == 'K') {
    //     return fahrenheitToKelvin(temperature)
    // }
    let convertedTemp = fromScale == toScale ? Number(temperature) :
                        fromScale == 'C' && toScale =='F' ? celsiusToFahrenheit(temperature) :
                        fromScale == 'F' && toScale == 'C' ? fahrenheitToCelsius(temperature) :
                        fromScale == 'C' && toScale == 'K' ? celsiusToKelvin(temperature) :
                        fahrenheitToKelvin(temperature)
    return convertedTemp
    
//        - Within each condition, handle conversions from different fromScale values (e.g. 'C', 'F') to the target toScale.
//        - Use the helper functions to perform the actual conversions.
   

} 

console.log(temperatureConversion(20, 'C', "C"))



export default temperatureConversion;




