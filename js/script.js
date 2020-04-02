function getCelsiusValue(){
    
    // getting celsius value from textbox
    celsius = document.getElementById("celsius").value;

    if (!/[-0-9]+\.*$/g.test(celsius)) {
        alert("Only numbers and decimals allowed!");
        document.getElementById("celsius").value = "";

    }else{
         // formula for calculating fahrenheit
        fahrenheit = (celsius * 1.8) + 32;
        finalFahrenheit = fahrenheit.toFixed(2);  // Round off after decimal value

        // formula for calculating kelvin
        kelvin = (celsius * 1) + 273.15;
        finalKelvin = kelvin.toFixed(2);  // Round off after decimal value

        // Displaying results in textbox
        document.getElementById("fahrenheit").value = finalFahrenheit + " °F";
        document.getElementById("kelvin").value = finalKelvin + " K";

        // making text color red
        document.getElementById("fahrenheit").style.color = "#f00";
        document.getElementById("kelvin").style.color = "#f00"

    }
}

function getFahrenheitValue(){
    // getting fahrenheit value from textbox
    fahrenheit = document.getElementById("fahrenheit").value;

    if (!/[-0-9]+\.*$/g.test(fahrenheit)) {
        alert("Only numbers and decimals allowed!");
        document.getElementById("fahrenheit").value = "";

    }else{
        // formula for calculating celsius
        celsius = ((fahrenheit - 32) / 1.8);
        finalCelsius = celsius.toFixed(2); // Round off after decimal value

        // formula for calculating kelvin
        kelvin = (((fahrenheit * 1) + 459.67) * 5 ) / 9;
        finalKelvin = kelvin.toFixed(2);  // Round off after decimal value

        // Displaying results in textbox
        document.getElementById("celsius").value = finalCelsius + " °C";
        document.getElementById("kelvin").value = finalKelvin + " K";

        // making text color red
        document.getElementById("celsius").style.color = "#f00";
        document.getElementById("kelvin").style.color = "#f00"
    }
}


function getKelvinValue(){
    // getting kelvin value from textbox
    kelvin = document.getElementById("kelvin").value;

    if (!/[-0-9]+\.*$/g.test(kelvin)) {
        alert("Only numbers and decimals allowed!");
        document.getElementById("kelvin").value = "";

    }else{
        // formula for calculating celsius
        celsius = (kelvin * 1) - 273.15;
        finalCelsius = celsius.toFixed(2);

        // formula for calculating fahrenheit
        fahrenheit = (((kelvin * 1) * 9) / 5 ) - 459.67;
        finalFahrenheit = fahrenheit.toFixed(2);  // Round off after decimal value

        // Displaying results in textbox
        document.getElementById("celsius").value = finalCelsius + " °C";
        document.getElementById("fahrenheit").value = finalFahrenheit + " °F";

        // making text color red
        document.getElementById("celsius").style.color = "#f00";
        document.getElementById("fahrenheit").style.color = "#f00"
    }
}