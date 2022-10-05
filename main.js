
class Card {
  constructor (nombre, fun, img) {
      this.nombre = nombre,
      this.fun = fun, 
      this.img = img
      
  }

}

const card1 = new Card ("THE FOOL","The Fool, the first card in the tarot, is a symbol of naivety and childlike wonder. This card is eager and ready to take a risk and start a new journey, always with a youthful spirit,astrologer and tarot practitioner Imani Quinn tells Bustle. Its also a reminder to proceed with caution", "Fool.jpg")
const card2 = new Card ("THE MAGICIAN","The Magician reminds you of your ability to design your dream life. “You have all of the tools you need to manifest your desires, be ready to use whichever one is called for at any moment,” says Quinn.","magician.jpg")
const card3 = new Card ("THE EMPEROR","When the Emperor shows up, it’s highlighting an authoritative power or a tendency to be in control. “There's often a need to parent yourself when this card shows up. It's a powerful sign that asks you to lean into your sense of security, stability, and structure,” explains Marquardt.","emperor.jpg")
const card4 = new Card ("THE EMPRESS","If the Empress has made an appearance, you’re being asked to step into your creative and sexual power. “It's a perfect card for self-love, but it also might show the need to nurture something very important to you, whether it's a child, a relationship or a creative project,” Ryan Marquardt, an astrologer and tarot practitioner, tells Bustle.", "empress.jpg")
const card5 = new Card ("THE HIEROPHANT","The Hierophant's stern and austere energy is about carrying legacy and traditions. “You might be asked to stick to the plan and not skip over any steps,” explains Marquardt. “It also has a lot to do with your belief systems, religious influences, and philosophies on life.”","hierophant.jpg")
const card6 = new Card ("THE LOVERS","Sure, the Lovers can indicate a union or a new boo on the horizon, “but it's really about establishing harmony when faced with a big choice in life,” says Marquardt. Ultimately, this card acknowledges that there’s an important decision that needs to be made.", "lovers.jpg")
const card7 = new Card ("THE PRIESTESS","The High Priestess invites you to follow your gut and accept what your inner knowing is already telling you. “Trust your intuition and see it as your superpower, allow yourself and others to move from an empowered intuitive place,” Quinn explains","priestess.jpg")
const card8 = new Card ("THE STRENGHT","While the Strength card symbolizes grit and power, it’s also about generosity. “The Strength card is a very positive one that asks you to stay compassionate with yourself and others, and give where you can, because when you give of yourself you'll ultimately receive more in return,” Marquardt explains.", "strength.jpg")

let enciclopedia =[]


// Guardar enciclopedia en estorage
if(localStorage.getItem("enciclopedia")) {
  
  enciclopedia = JSON.parse(localStorage.getItem("enciclopedia"))
}
else{
  enciclopedia.push(card1, card2, card3, card4, card5, card6, card7, card8)
localStorage.setItem("enciclopedia", JSON.stringify(enciclopedia))
}
// Llamar DOM

const inputNombre = document.getElementById ("nameIn") 
const inputFunction = document.getElementById("funcionIn")
const btnGuardar = document.getElementById("btnGuardar")
// const lista = document.getElementById("lista")

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
 `<div class="card mb-3" style="max-width: 540px;">
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
// let resultado = enciclopedia.filter (el) => el.nombre.includes ("fool")
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

   
