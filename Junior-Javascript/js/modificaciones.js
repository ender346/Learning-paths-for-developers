let operacion = alert("Que operacion quieres realizar?");

let sum = prompt("1 sumar, 2 restar, 3 dividir, 4 multiplicar");

if (sum == 1){
    let ret = parseInt (prompt("Dato 1"));
    let ret2 = parseInt (prompt("Dato 2"));
    resultado = (ret + ret2);
    alert(`tu resultado es ${resultado}`);
}
else if (sum == 2){
    let ret = parseInt (prompt("Dato 1"));
    let ret2 = parseInt (prompt("Dato 2"));
    resultado = (ret - ret2);
    alert(`tu resultado es ${resultado}`);
}
else if (sum == 3){
    let ret = parseInt (prompt("Dato 1"));
    let ret2 = parseInt (prompt("Dato 2"));
    resultado = (ret / ret2);
    alert(`tu resultado es ${resultado}`);
}
else if (sum == 4){
    let ret = parseInt (prompt("Dato 1"));
    let ret2 = parseInt (prompt("Dato 2"));
    resultado = (ret * ret2);
    alert(`tu resultado es ${resultado}`);
}else{
    alert("No hay esa Operacion")
}