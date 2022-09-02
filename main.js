function hello(persona, hogar) {
  alert ("Bienvenide a ollivander " + persona + " de " + hogar)
}

function datos() {
    let nombre = prompt ("¿Cual es tu nombre?")
    let casa = prompt ("¿A que casa de Hogwarts perteneces?")
    hello(nombre, casa)
}


function consulta() {
    let respuesta = prompt("¿Desea elegir otro hechizo?" + "\nSi" + "\nNo")
    return respuesta
}

function hech() {
    let hechizo =prompt("Elige el hechizo que deseas" + "\nAccio" + "\nConfundus" + "\nAlohomora");
    return hechizo

}


datos()
let hechizo = hech()
while (hechizo.toLowerCase() == "Accio" || "Confundus" || "Alohomora") {
    if (hechizo == "accio" || hechizo == "Accio") {
    alert("Se utiliza para atraer un objeto sea cual sea la distancia a la que esté"); 
} else if (hechizo == "confundus" || hechizo == "Confundus") {
    alert("Utilizado para causar confusión en las personas o encantar objetos")
} else if (hechizo == "Alohomora" || hechizo == "alohomora") {
    alert("Hechizo utilizado para abrir cerraduras cerradas con llave")
} else {
    alert("Hechizo no encontrado");
}

let pregunta = consulta()
    if (pregunta.toLowerCase() == "si") {
        hechizo =prompt("Elige el hechizo que deseas" + "\nAccio" + "\nConfundus" + "\nAlohomora");
    } else {
        alert ("Travesura terminada")
        break
    }
}
