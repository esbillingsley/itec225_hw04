function encryptInput() {
    let input = document.getElementById("messageInput").value;
    if (isEmpty(input)) {
        return;
    }
    document.getElementById("outputAES").innerHTML = "AES Encrypted: " + CryptoJS.AES.encrypt(input, "secret passphrase");
    document.getElementById("outputSHA1").innerHTML = "SHA1 Encrypted: " + CryptoJS.SHA1(input);
    document.getElementById("outputSHA224").innerHTML = "SHA224 Encrypted: " + CryptoJS.SHA224(input);
    document.getElementById("outputSHA256").innerHTML = "SHA256 Encrypted: " + CryptoJS.SHA256(input);
}

function dTob() {
    let input = document.getElementById("decimalInput").value;
    if (isEmpty(input)) {
        return;
    }
    input = parseInt(input);
    if (!isNumber(input)) {
        alert("Please enter a valid integer number.");
        return;
    }
    var output = "";
    while (input >= 1) {
        output = (input % 2).toString() + output;
        input = Math.floor(input / 2);
    }
    document.getElementById("outputBinary").innerHTML = "Binary Conversion: " + output;
}

function bTod() {
    let input = document.getElementById("binaryInput").value;
    if (isEmpty(input)) {
        return;
    }
    if (!isBinary(input)) {
        alert("Please enter a binary number.");
        return;
    }
    let exp = input.length - 1;
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum += parseInt(input.charAt(i)) * Math.pow(2, exp);
        exp--;
    }
    document.getElementById("outputDecimal").innerHTML = "Decimal Conversion: " + sum;
}

function isEmpty(input) {
    if (input == "" || input == null) {
        alert("Input is empty, please try again.");
        return true;
    }
    return false;
}

function isBinary(input) {
    for (let i = 0; i < input.length; i++) {
        let ch = input.charAt(i);
        if (ch != "1" && ch != "0") {
            return false;
        }
    }
    return true;
}

function isNumber(input) {
    return Number.isInteger(input) && parseInt(input) >= 0;
}