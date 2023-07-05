let array1 = ["Marta", "Fernando", "Alan"];
let array2 = ["Pedro", "Julian", array1, "Jose"];

forLabel: 
for (let element of array1) {
    if (element === "Alan") {
    for (let subElement of array1) {
        if (subElement === "Marta") {
        continue forLabel;
    } else {
        document.write(subElement + "<br>");
        }
    }
    } else {
    document.write(array2[array1.indexOf(element)] + "<br>");
    }
}

