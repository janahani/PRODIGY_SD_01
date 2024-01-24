function ConvertTemp() {
    const degrees = parseFloat(document.getElementById("degrees").value);
    const unit = document.getElementById("TempUnit").value;
    let result = document.getElementById("result");
    let fahrenheit;
    let kelvin;
    let celsius;

    if (unit === "celsius") {
        fahrenheit = (degrees * 9/5) + 32;
        kelvin = degrees + 273.15;
        result.value = `${fahrenheit.toFixed(2)} F , ${kelvin.toFixed(2)} K`;
    } else if (unit === "fahrenheit") {
        celsius = (degrees - 32) * 5/9;
        kelvin = celsius + 273.15;
        result.value = `${celsius.toFixed(2)} °C, ${kelvin.toFixed(2)} K`;
    } else {
        celsius = degrees - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
        result.value = `${celsius.toFixed(2)} °C, ${fahrenheit.toFixed(2)} F`;
    }
}
