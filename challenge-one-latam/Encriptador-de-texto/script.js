const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
copia.style.display = "none";

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


function validarTexto(){
    let textoEscrito = document.querySelector(".text-area").value;
    let validador = textoEscrito.match(/^[a-z\s]*$/);
    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

function btnEncriptar(){                                                    
    if(!validarTexto()) {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";                                                     //limpia el campo de texto ingresado por usuario
    mensaje.style.backgroundImage = "none";                                  //quita imagen al aparecer texto encriptado
    copia.style.display = "block";
    }
}

function encriptar(stringEncriptada){                                           //ENCRIPTA MENSAJE
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];     
    stringEncriptada = stringEncriptada.toLowerCase();   //convierte todo a minusculas

    for(let i = 0; i < matrizCodigo.length; i++){                                           //menor al tamaño de la matriz,recorrido
        if(stringEncriptada.includes(matrizCodigo[i][0])){                                  //verificar posición de las letras ingresadas
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);   //sustituye caracteres
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){                                                     
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";                                                                                
}

function desencriptar(stringDesencriptada){                                     //DESENCRIPTA MENSAJE
        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
        stringDesencriptada = stringDesencriptada.toLowerCase();   //convierte todo a minusculas
    
        for(let i = 0; i < matrizCodigo.length; i++){                                           
            if(stringDesencriptada.includes(matrizCodigo[i][1])){                                  
                stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);   
            }
        }
        return stringDesencriptada;
}

function btnCopiar(){                                       //Copia al portapapeles
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);       
    mensaje.value = "";
    alert("Texto Copiado");
}