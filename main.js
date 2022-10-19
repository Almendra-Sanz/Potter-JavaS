
class Card {
  constructor (nombre, fun, img) {
      this.nombre = nombre,
      this.fun = fun, 
      this.img = img
      
  }

}

let enciclopedia = []

const cargarCarta = async() =>{
  const response = await fetch("cartas.json")
  const data = await response.json()
  console.log(data)

  for (let card of data){
      let cartaNueva = new Card (card.nombre, card.fun, card.img)
      enciclopedia.push(cartaNueva)
  } 
  localStorage.setItem("enciclopedia", JSON.stringify(enciclopedia)) 

}

// Guardar enciclopedia en estorage
if(localStorage.getItem("enciclopedia")){
  enciclopedia = JSON.parse(localStorage.getItem("enciclopedia"))
}
else{
  console.log("Seteando por primera vez el array")
  cargarCarta()
}



// Llamar DOM

const inputNombre = document.getElementById ("nameIn") 
const inputFunction = document.getElementById("funcionIn")
const btnGuardar = document.getElementById("btnGuardar")

btnGuardar.addEventListener(`click`, () => {
 console.log(inputNombre.value, inputFunction.value)
 enciclopedia.push(new Card (inputNombre.value, inputFunction.value, "comodin.jpg"))
 nuevaCard(enciclopedia)
 localStorage.setItem("enciclopedia", JSON.stringify(enciclopedia))
 inputNombre.value = ""
 inputFunction.value = ""

})

function nuevaCard(array) {
  let card = document.createElement("div");
 enciclopedia.forEach ((e) => {
 card.innerHTML =
` <div class="card mb-3" style="max-width: 540px;">
 <div class="row g-0">
   <div class="col-md-4">
     <img src="assets/comodin.jpg" class="img-fluid rounded-start" alt="...">
   </div>
   <div class="col-md-8">
     <div class="card-body">
       <h5 class="card-title">${e.nombre}</h5>
       <p class="card-text">${e.fun}</p>
     </div>
   </div>
 </div>
</div>`} )
listaCartas.appendChild(card)
}

// Nueva card storage


// Explorar
const btnExplorar = document.getElementById("btnExplorar")
const listaCartas= document.getElementById("listaCartas")

btnExplorar.addEventListener(`click`, () => {
  explorar(enciclopedia)
 })

 function explorar(array) {
  array.forEach((card)=>{
     let cartas = document.createElement ("div")
      cartas.innerHTML = 
      `<div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="assets/${card.img}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${card.nombre}</h5>
            <p class="card-text">${card.fun}</p>
          </div>
        </div>
      </div>
    </div>` ; 
      listaCartas.append(cartas);
      
        
    })
  }
//  Ocultar catalogo
let btnOcultar = document.getElementById ("btnOcultar")

function ocultar () {
  listaCartas.innerHTML = ""
}

btnOcultar.addEventListener(`click`, () => {
  ocultar(enciclopedia)
 })

// Filtrar
 const inputBucar = document.getElementById ("buscar")
 const btnBuscar = document.getElementById ("btnBuscar")

 function buscar() {
  let resultado = enciclopedia.filter ((card)=> card.nombre.toLowerCase().includes(inputBucar.value.toLowerCase()))
  if (resultado == 0){
    Swal.fire({
      title: 'El nombre ingresado no se encuentra',
      width:500,
      color:'#000000',
      font:'Georgia, serif', 
      background:'#FFFFFF',
      confirmButtonColor:'#000000',
      imageUrl: 'assets/gatotaza1.png',
      imageHeight:160,
      


    })

    
    inputBucar.value = ""
  } else {
    listaCartas.innerHTML =""
    explorar(resultado)

  }
  }

  btnBuscar.addEventListener (`click`, () => {
  buscar()
  inputBucar.value = ""
   })

   
