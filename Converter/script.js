/* bipbop! converter script by John Spahr */

function toText() {
    var inputTxt = document.getElementById("input").value;
    var outputBox = document.getElementById("output");
    outputBox.value = "";

    var nibbles = inputTxt.split(" ");

    for (var i = 0; i < nibbles.length; i++) {
        switch (nibbles[i]) {
            case "0000":
                outputBox.value += " ";
                break;
            case "0001":
                outputBox.value += "0";
                break;
            case "0010":
                outputBox.value += "1";
                break;
            case "0011":
                outputBox.value += "2";
                break;
            case "0100":
                outputBox.value += "3";
                break;
            case "0101":
                outputBox.value += "4";
                break;
            case "0110":
                outputBox.value += "5";
                break;
            case "0111":
                outputBox.value += "6";
                break;
            case "1000":
                outputBox.value += "7";
                break;
            case "1001":
                outputBox.value += "8";
                break;
            case "1010":
                outputBox.value += "9";
                break;
            case "1011":
                outputBox.value += "+";
                break;
            case "1100":
                outputBox.value += "-";
                break;
            case "1101":
                outputBox.value += "*";
                break;
            case "1110":
                outputBox.value += "/";
                break;
            case "1111":
                outputBox.value += ".";
                break;
        }
        outputBox.value += " ";
    }
}

function toBinary() {
    var inputTxt = document.getElementById("input").value;
    var outputBox = document.getElementById("output");
    outputBox.value = "";

    var nibbles = inputTxt.split(" ");

    for (var i = 0; i < nibbles.length; i++) {
        switch (nibbles[i]) {
            case " ":
                outputBox.value += "0000";
                break;
            case "0":
                outputBox.value += "0001";
                break;
            case "1":
                outputBox.value += "0010";
                break;
            case "2":
                outputBox.value += "0011";
                break;
            case "3":
                outputBox.value += "0100";
                break;
            case "4":
                outputBox.value += "0101";
                break;
            case "5":
                outputBox.value += "0011";
                break;
            case "6":
                outputBox.value += "0111";
                break;
            case "7":
                outputBox.value += "1000";
                break;
            case "8":
                outputBox.value += "1001";
                break;
            case "9":
                outputBox.value += "1010";
                break;
            case "+":
                outputBox.value += "1011";
                break;
            case "-":
                outputBox.value += "1100";
                break;
            case "*":
                outputBox.value += "1101";
                break;
            case "/":
                outputBox.value += "1110";
                break;
            case ".":
                outputBox.value += "1111";
                break;
        }
        outputBox.value += " ";
    }
}