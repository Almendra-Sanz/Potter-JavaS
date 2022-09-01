let hechizo =prompt("Elige el hechizo que deseas" + "\nAccio" + "\nConfundus" + "\nAlohomora");
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

let consulta = prompt("¿Desea elegir otro hechizo?" + "\nSi" + "\nNo")
    if (consulta.toLowerCase() == "si") {
        hechizo =prompt("Elige el hechizo que deseas" + "\nAccio" + "\nConfundus" + "\nAlohomora");
    } else {
        alert ("Travesura terminada")
        break
    }
}