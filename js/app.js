// 1. Constante para el costo base por m²
const costoBase = 1.16; 


const propiedad = document.getElementById("propiedad");
const ubicacion = document.getElementById("ubicacion");
const metros2 = document.getElementById("metros2");
const boton = document.querySelector("button");
const valorPoliza = document.getElementById("valorPoliza");

// click en el botón Cotizar
boton.addEventListener("click", () => {
    // 4. Obtenemos los valores seleccionados
    let factorPropiedad = Number(propiedad.value);
    let factorUbicacion = Number(ubicacion.value);
    let metros = Number(metros2.value);

    // Validacion de entradas
    if (isNaN(factorPropiedad) || isNaN(factorUbicacion) || metros <= 0) {
        alert("Por favor, complete todos los campos correctamente.");
        return;
    }

    // 5. Calculamos el valor de la póliza
    let total = costoBase * metros * factorPropiedad * factorUbicacion;

    // 6. Mostramos el resultado en el HTML, con dos decimales
    valorPoliza.textContent = total.toFixed(2);
});
