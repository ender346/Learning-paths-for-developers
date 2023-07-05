/* PRUEBAS CON PROMP, devuelve un valor*/
let Hello = "Emanuel"

wordl = `Hola soy ${Hello} y soy Junior Front-End Web Developer`;

developer = wordl

alert(developer)

/* Problemas de js ejercicio de practica */


let cliente = prompt("Cuanto es tu presupuesto");
let cliente2 = prompt("Cuanto es tu presupuesto");
let cliente3 = prompt("Cuanto es tu presupuesto");

cliente = parseInt(cliente);

if (cliente >= 25 && cliente < 45) {
    alert("Compra una pc");
    alert("y te sobra " + (cliente - 25));
    }

    else if (cliente >= 50 && cliente < 110) {
    alert("Compra una laptop");
    alert("y te sobra " + (cliente - 50));
    }

    else if (cliente >= 150) {
        alert("Compra una laptop gamer")
        alert("y te sobra " + (cliente - 150));
        } else {
            alert("Lo siento pero no te alcanza");
        }

    if (cliente2 >= 25 && cliente2 < 45) {
        alert("Compra una pc");
        }
    
        else if (cliente2 >= 50 && cliente2 < 90) {
        alert("Compra una laptop");
        }
        else if (cliente >= 150) {
            alert("Compra una laptop gamer")
            } else {
                alert("Lo siento pero no te alcanza");
            }

        if (cliente3 >= 25 && cliente3 < 50) {
            alert("Compra una pc");
            }
        
            else if (cliente3 >= 50 && cliente3 < 100) {
            alert("Compra una laptop");
            }
        
            else if (cliente >= 150) {
                alert("Compra una laptop gamer")
                } else {
                    alert("Lo siento pero no te alcanza");
                }