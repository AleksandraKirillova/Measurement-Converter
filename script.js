function cmToInches(cm) {
    return cm / 2.54;
}

function inchesToCm(inches) {
    return inches * 2.54;
}

function convertCmToInches() {
    const cmValue = document.getElementById('cmInput').value;
    const inchesValue = cmToInches(cmValue);
    document.getElementById('inchesResult').innerText = `${cmValue} centimeters is equal to ${inchesValue.toFixed(2)} inches.`;
}

function convertInchesToCm() {
    const inchesValue = document.getElementById('inchesInput').value;
    const cmValue = inchesToCm(inchesValue);
    document.getElementById('cmResult').innerText = `${inchesValue} inches is equal to ${cmValue.toFixed(2)} centimeters.`;
}
