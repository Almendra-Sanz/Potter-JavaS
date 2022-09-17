


function hello(persona) {
    alert ("Bienvenide a ollivander " + persona + ", aqui encontraras una enciclopedia de hechizos colaborativa")
  }

  

  
  function datos() {
      let nombre = prompt ("¿Cual es tu nombre?")
      hello(nombre)
  }
  
  
  class Hechizo {
      constructor (id, nombre, funcion) {
          this.nombre = nombre,
          this.funcion = funcion
  
      }
   
      mostrar() {
        let lista = document.getElementById("lista")
        let hechizo = document.createElement("li");
        hechizo.innerHTML =(`El hechizo ${this.nombre} se utiliza para ${this.funcion}`) ; 
        lista.append(hechizo);
      }
  }
  
  const hechizo1 = new Hechizo ("1","Accio", "para atraer un objeto sea cual sea la distancia a la que esté")
  const hechizo2 = new Hechizo ("2","Alohomora","abrir cerraduras cerradas con llave")
  const hechizo3 = new Hechizo ("3","Confundus","causar confusión en las personas o encantar objetos")
  const hechizo4 = new Hechizo ("4","Aqua eructo","generar un potente chorro de agua que salga de la punta de la varita, puede ayudar a combatir incendios")
  const hechizo5 = new Hechizo ("5","Avis", "invocar a una bandada de aves")
  const hechizo6 = new Hechizo ("6","Anapneo", "despejar las vias respiratorias de las personas")
  const hechizo7 = new Hechizo ("7","Avada Kedavra", "matar a cualquier ser vivo que este a su alncance.Es una de las maldiciones imperdonables y no posee contra hechizo.")
  
  
  const enciclopedia = [hechizo1, hechizo2, hechizo3, hechizo4, hechizo5, hechizo6, hechizo7]
 
 

  function explorar(array) {
      array.forEach((Hechizo) => {
          Hechizo.mostrar()
          
      })
      
      } 
  
  function buscarNombre(array) {
      let buscar = prompt("Ingrese el nombre del hechizo que desea encontrar")
      let nombreEncontrado = enciclopedia.find((hechizo)=> hechizo.nombre.toLowerCase() == buscar.toLowerCase())
      if(nombreEncontrado == undefined){
          alert("El hechizo no se encuentra disponible por el momento")
      }else{
          alert("El hechizo se encuentra en la enciclopedia")
          alert(`El hechizo ${nombreEncontrado.nombre} se utiliza para ${nombreEncontrado.funcion}`)
         
      }
      susDeseos()
  }
  
  function incluirHechizo(array) {
      let nombreIn = prompt("Ingrese el nombre del hechizo")
      let funcionIn = prompt ("Describi la funcion del hechizo ingresado anteriormente ")
      let hechizoNuevo = new Hechizo (array.length+1, nombreIn, funcionIn)
      let confirmacion = prompt (`${nombreIn}, ${funcionIn}
        Confirma que quiere incluir el hechizo a la enciclopedia? Si/No`) 
         if (confirmacion.toLowerCase() != "si") {
            susDeseos()
       
        } else {
            array.push(hechizoNuevo)
            console.log(hechizoNuevo)
        let otroHechizo = prompt ("Desea ingresar otro hechizo?")
        if (otroHechizo != "si") {
            susDeseos()
        } else {
            incluirHechizo()
        }
            

        }
   
  }

  const botoncito = document.querySelector("button");
  botoncito.addEventListener("click", susDeseos)
  
  
  function susDeseos() {



      let opcion = parseInt (prompt(`Ingrese el numero correspondiente a la opcion que desea realizar:
      1 - Explorar la enciclopedia de hechizos
      2 - Encontrar un hechizo por nombre
      3- Agregar un nuevo hechizo a la enciclopedia
      4 - Si desea marcharse`))
      
      switch(opcion){
          
          case 1:
              explorar(enciclopedia)
            break 
             case 2: 
             buscarNombre(enciclopedia)
            break 
             case 3: 
             incluirHechizo(enciclopedia) 
            break
          case 4: 
          salir = true   
          break
          
             default: 
            alert(`Ingrese una opción correcta`)
      }
  }
   
  
  datos()
  
  
  










