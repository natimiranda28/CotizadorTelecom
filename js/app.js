
const costoM2 = 1.16;


let fmPropiedad;
let fmUbicacion;


let metros2 = prompt("Ingresa los metros cuadrados de la vivienda:");
metros2 = parseInt(metros2);


let tipoVivienda = prompt("Ingresa el tipo de vivienda:\n(Casa, P.H., Dto. Edificio, Barrio Privado, Oficina, Local comercial, Depósito logística)");


for (let i = 0; i < datosPropiedad.length; i++) {
    if (datosPropiedad[i].tipo.toLowerCase() === tipoVivienda.toLowerCase()) {
        fmPropiedad = datosPropiedad[i];
        break;
    }
}


let tipoUbicacion = prompt("Ingresa la ubicación:\n(CABA, Tandil, Costa Atlántica)");


for (let i = 0; i < datosUbicacion.length; i++) {
    if (datosUbicacion[i].tipo.toLowerCase() === tipoUbicacion.toLowerCase()) {
        fmUbicacion = datosUbicacion[i];
        break;
    }
}


if (fmPropiedad && fmUbicacion && Number.isInteger(metros2) && metros2 > 0) {
    let resultado = costoM2 * metros2 * fmPropiedad.factor * fmUbicacion.factor;
    console.log("Resultado de la Póliza: $ " + resultado.toFixed(2));
} else {
    console.warn("Hubo un error en los datos ingresados.");
}
