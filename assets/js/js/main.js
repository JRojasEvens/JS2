const a = function(){
    var imagen = document.querySelector('#img-border')
    imagen.classList.toggle('borde')
}

const bbbb = function(){
    bayern = document.getElementById('bayern').valueAsNumber
    barca = document.getElementById('barca').valueAsNumber
    real = document.getElementById('real').valueAsNumber
    mensaje = document.getElementById('mensaje')
    total = bayern+barca+real
    if(total < 0){
        mensaje.innerHTML = 'No se aceptan numeros negativos'
    } else if(total > 10){
        mensaje.innerHTML = 'Llevas demasiados stickers'
    } else if(total <= 10){
        mensaje.innerHTML = 'Llevas '+total+' Stickers'
    } else {
        mensaje.innerHTML = 'Introduce una opción correcta'
    }
}
const verify = function(){
    let contraseña1 = '911'
    let contraseña2 = '714'
    mensaje2 = document.getElementById('mensaje2')
    num1 = document.getElementById('num1').value
    num2 = document.getElementById('num2').value
    num3 = document.getElementById('num3').value
    userpass = num1+num2+num3
    if (userpass == contraseña1){
        mensaje2.innerHTML = 'Password 1 correcto'
    } else if(userpass == contraseña2){
        mensaje2.innerHTML = 'Password 2 correcto'
    } else {
        mensaje2.innerHTML = 'Password incorrecto'
    }
}
