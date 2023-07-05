let free = false

const validarCliente = (time)=>{
    let edad = prompt("Cual es tu edad?");
    if (edad > 18){
        if (time >= 2 && time < 7 && free == false){
            alert("Puedes pasar gratis");
            free = true;
        }else{
            alert(`son las ${time}:00 puedes pasar pero tienes que pagar la entrada`);
        }
    }else {
        alert("No puedes pasar por tu edad");
    }
}

validarCliente(4);
validarCliente(5);
validarCliente(8);
validarCliente(2);
validarCliente(15);