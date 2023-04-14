console.log('Lets convert Temperature 🌡️');

const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    const tempSelected = document.querySelector('#temp_diff');
    const valeTemp = temp_diff.options[tempSelected.selectedIndex].value;
    

    const celTOfah = (cel) => {
        let fahrenheit = (cel * (9 / 5) + 32);
        return fahrenheit;
    }

    
    const fahTOcel = (fehr) => {
        let celsius = ((fehr - 32) * 5 / 9);
        return celsius;
    }

    let result;
    if (valeTemp == "cel") {
        result = celTOfah(numberTemp);
        document.getElementsByName('display')[0].value = ` ${result}°Fahrenheit`;
    } else {
        result = fahTOcel(numberTemp);
        document.getElementsByName('display')[0].value = ` ${result}°Celsius`;
    }

    
}
