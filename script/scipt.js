function identificacion (){
    let nombre = prompt ("Nombre:");
    let apellido = prompt ("Apellido:");
    let telefono = prompt("Número telefónico:");
    return identidad = (nombre +" "+ apellido + " con el número telefónico: " + telefono)
}
function productosSeleccionados (identidad){
    let sumaTotal=0;
    let seguirComprando = true;
    while(seguirComprando){
        let productoSeleccionado = parseInt(prompt("Quiero el producto número:"));
        switch (productoSeleccionado){
            case 1:
                sumaTotal += 150
                break;

            case 2: 
                sumaTotal += 500
                break;

            case 3:
                sumaTotal += 200
                break;
                
            case 4:
                sumaTotal += 250
                break;

            default:
                alert("Actualmente el número ingresado no corresponde a ningún producto en stock.")
                break;
        }
        alert("El monto actual de su compra es: $" + sumaTotal)
    let elegirSeguirComprando = parseInt(prompt ("¿Quiere seguir agregando productos?: 1= Sí, 2= Ir a pagar"))
    if(elegirSeguirComprando ===1){
        seguirComprando = true;
    }else if (elegirSeguirComprando ===2){
        seguirComprando = false
    }else (alert("Opción inválida"));
        
}
    alert ("El monto total a pagar es: $"+ sumaTotal)
    console.log(identidad + " Tiene que pagar: $" + sumaTotal)
}
window.addEventListener ("load", function(){
    identificacion()
    productosSeleccionados (identidad)
})
