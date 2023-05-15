document.getElementById("iniciar-sesion").addEventListener("click", () => {
  if (document.getElementById("mensaje-sistema")) {
    document.getElementById("mensaje-sistema").remove()
  }
  
  const usuario = document.getElementById("usuario")
  const pass = document.getElementById("pass")

  let acceso = true;

  switch (usuario.value) {
    case "agarcia":
      if (pass.value !== "Gbautista") {
        acceso = false
      }
      break;
    case "lperez":
      if (pass.value !== "Prosario") {
        acceso = false
      }
      break;
    default:
      acceso = false
  }

  let contenedorError = document.getElementById("error-login")
  const nuevoParrafo = document.createElement("p")

  if (acceso === false) {
    nuevoParrafo.innerText = `Usuario y contraseña no válidos`
    nuevoParrafo.className = "mensaje-error"
    nuevoParrafo.id = "mensaje-sistema"
    
  } else {
    nuevoParrafo.innerText = `Usuario y contraseña válidos`
    nuevoParrafo.className = "mensaje-exito"
    nuevoParrafo.id = "mensaje-sistema"
  }

  contenedorError.appendChild(nuevoParrafo)
  contenedorError.setAttribute("aria-live", "assertive")
})