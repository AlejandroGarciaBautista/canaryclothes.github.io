document.getElementById("registrar-usuario").addEventListener("click", () => {
  if (document.getElementById("mensaje-sistema")) {
    document.getElementById("mensaje-sistema").remove()
  }

  let datosCorrectos = true
  let usuarioCorrecto = true
  let mailCorrecto = true
  let passCorrecta = true
  let dniCorrecto = true
  let telefonoCorrecto = true

  const usuario = document.getElementById("usuario")
  const usuario2 = document.getElementById("confirm-usuario")
  const mail = document.getElementById("mail")
  const mail2 = document.getElementById("confirm-mail")
  const pass = document.getElementById("pass")
  const pass2 = document.getElementById("confirm-pass")
  const dni = document.getElementById("dni")
  const telefono = document.getElementById("telefono")

  if (usuario.value !== usuario2.value || !noVacio(usuario)) {
    datosCorrectos = false
    usuarioCorrecto = false
  }

  if (mail.value !== mail2.value || !noVacio(mail.value)) {
    datosCorrectos = false
    mailCorrecto = false
  }

  if (mail.value.indexOf("@") === -1) {
    datosCorrectos = false
    mailCorrecto = false
  }

  if (pass.value !== pass2.value || !noVacio(pass)) {
    datosCorrectos = false
    passCorrecta = false
  }

  if (validarDNIEspana(dni.value) === false) {
    datosCorrecto = false
    dniCorrecto = false
  }

  if (telefono.value.length < 9) {
    datosCorrecto = false
    telefonoCorrecto = false
  }

  let contenedorError = document.getElementById("error-registro")
  const nuevoParrafo = document.createElement("p")

  if (datosCorrectos === false) {
    nuevoParrafo.innerText = "Error en los campos: "
    if(usuarioCorrecto === false) {
      nuevoParrafo.innerText += "- Usuario no válido "
    }

    if(mailCorrecto === false) {
      nuevoParrafo.innerText += "- Mail no válido "
    }

    if(passCorrecta === false) {
      nuevoParrafo.innerText += "- Contraseña no válida "
    }

    if(dniCorrecto === false) {
      nuevoParrafo.innerText += "- DNI no válido "
    }
    
    if(telefonoCorrecto === false) {
      nuevoParrafo.innerText += "- Teléfono no válido "
    }
    
    nuevoParrafo.className = "mensaje-error"
    nuevoParrafo.id = "mensaje-sistema"
  } else {
    nuevoParrafo.innerText = `Usuario creado correctamente`
    nuevoParrafo.className = "mensaje-exito"
    nuevoParrafo.id = "mensaje-sistema"
  }

  contenedorError.appendChild(nuevoParrafo)
  contenedorError.setAttribute("aria-live", "assertive")
})



const validarCorreo = (correo) => {
    const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patronCorreo.test(correo);
  };  

const noVacio = (cadena) => {
  return cadena.length === 0 ? false : true
}

const validarDNIEspana = (dni) => {
  const letrasDNI = 'TRWAGMYFPDXBNJZSQVHLCKE';
  const patronDNI = /^(\d{8})([A-HJ-NP-TV-Z])$/i;

  if (!patronDNI.test(dni)) {
    return false; // El formato del DNI no es válido
  }
  
  const [, numero, letra] = dni.match(patronDNI);
  const indice = parseInt(numero, 10) % 23;
  const letraEsperada = letrasDNI.charAt(indice);
  
  return letra.toUpperCase() === letraEsperada.toUpperCase();
};