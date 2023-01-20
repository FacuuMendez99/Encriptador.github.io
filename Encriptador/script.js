const inputTexto = document.querySelector(".text")
const mensaje = document.querySelector(".encText")
const load = document.querySelector(".load")
const loader = document.querySelector(".loader")
const copyB = document.querySelector(".copy")



function botonEncriptar() {
    let textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    loader.classList.add("hide")
    load.classList.add("hide")
    mensaje.classList.add("show")
    copyB.classList.add("show")
}

function botonDesencriptar(){
    let textoEncriptado = desencriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
}

function encriptar(palabra) {
    let caracteres = palabra.split("")
    let codigo = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"}

for (let i = 0; i < caracteres.length; i++) {
    const caracter = caracteres[i];
    if (codigo[caracter]) {
        caracteres[i] = codigo[caracter];
    }
    }

    return caracteres.join("")
}

function desencriptar(palabra) {
    let nueva = palabra
    nueva = nueva.replace(/ai/g,"a")
    nueva = nueva.replace(/enter/g,"e")
    nueva = nueva.replace(/imes/g,"i")
    nueva = nueva.replace(/ober/g,"o")
    nueva = nueva.replace(/ufat/g,"u")
    return nueva
}


async function copiar() {
    await navigator.clipboard.writeText(mensaje.value); 
}