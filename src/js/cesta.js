  // Carrito
// obtener el JSON
const objeto = JSON.parse(
  `
  {
    "cesta": 
    [
      {
        "id": 1,
        "producto": "Pantalón corto de hombre color azul",
        "precio": 50,
        "imagen": "../img/Pantalon corto azul.jpg"
      }, 
      {
        "id": 2,
        "producto": "Camiseta de mujer color azul",
        "precio": 100,
        "imagen": "../img/camisa mujer azul.jpg"
      },
      {
        "id": 3,
        "producto": "Calzado deportivo color blanco",
        "precio": 70,
        "imagen": "../img/nike.jpg"
      }
    ]
  }
  `
)

// obtener el contenedor donde se mostrarán los productos
const contenedor = document.querySelector('#items');

// recorrer los productos y construir las etiquetas
objeto.cesta.forEach(producto => {
  
  // crear contenedor
  const nuevoDiv = document.createElement("div")
  nuevoDiv.className = "btn d-flex gap-2 justify-content-center border mt-3 shadow-sm w-25 m-1"
  nuevoDiv.id = "articulo"

  // crear la etiqueta img
  const imagen = document.createElement('img');
  imagen.src = producto.imagen;
  imagen.alt = producto.producto;
  imagen.className = "img-carrito"
  imagen.tabIndex = 0
  
  // crear la etiqueta p
  const texto = document.createElement('p');
  texto.textContent = producto.producto + ": " + producto.precio + "€";
  

  nuevoDiv.appendChild(texto)
  nuevoDiv.appendChild(imagen)
  contenedor.appendChild(nuevoDiv)
});

const total = document.querySelector('#pagar');
let suma = 0;

objeto.cesta.forEach(producto => {
  suma += producto.precio
})
total.textContent = total.textContent + suma.toString() + "€"

// Pago del carrito
// const botonPagar = document.querySelector('#boton-pagar');
// botonPagar.addEventListener('click', () => {
//   const confirmacion = confirm("¿Está seguro de que desea realizar la compra?")

//   if (confirmacion) {
//     const contenedor = document.querySelector('#items');
//     contenedor.innerHTML = '';
//     const total = document.querySelector('#pagar');
//     total.textContent = 'Total a pagar: 0€';
//   }
// });


const botonCancelar = document.getElementById('cancelar');
const botonConfirmar = document.getElementById('confirmar');

botonCancelar.addEventListener('click', () => {
  if (document.getElementById("mensaje-sistema")) {
    document.getElementById("mensaje-sistema").remove()
  }

  document.getElementById("confirm-pago").remove()

  const contenedor = document.querySelector('#items');
  contenedor.innerHTML = '';
  const total = document.querySelector('#pagar');
  total.textContent = 'Total a pagar: 0€';

  let contenedorConfirmacion = document.getElementById("confirmacion")
  const nuevoParrafo = document.createElement("p")

  nuevoParrafo.innerText = `Se ha cancelado la compra`
  nuevoParrafo.className = "mensaje-error"
  nuevoParrafo.id = "mensaje-sistema"

  contenedorConfirmacion.appendChild(nuevoParrafo)
  contenedorConfirmacion.setAttribute("aria-live", "assertive")
});

botonConfirmar.addEventListener('click', () => {
  if (document.getElementById("mensaje-sistema")) {
    document.getElementById("mensaje-sistema").remove()
  }

  document.getElementById("confirm-pago").remove()

  const contenedor = document.querySelector('#items');
  contenedor.innerHTML = '';
  const total = document.querySelector('#pagar');
  total.textContent = 'Total a pagar: 0€';

  let contenedorConfirmacion = document.getElementById("confirmacion")
  const nuevoParrafo = document.createElement("p")

  nuevoParrafo.innerText = `Se ha realizado la compra`
  nuevoParrafo.className = "mensaje-exito"
  nuevoParrafo.id = "mensaje-sistema"

  contenedorConfirmacion.appendChild(nuevoParrafo)
  contenedorConfirmacion.setAttribute("aria-live", "assertive")

});

