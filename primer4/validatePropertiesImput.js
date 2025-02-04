
function validatePropertiesImput(value, propertyName) {
    if (!isNaN(value) && propertyName === "Price") {   
        if (value > 0){
           return value;
         }
       }
    if (!isNaN(value)) {   
        return value;
    }
    
    if (typeof value === "string" && propertyName !== "Price") {
        return value;
    }

    console.warn(`${propertyName} in invalid. Setting it to undefined`)
    return undefined;
    
}

export default validatePropertiesImput;