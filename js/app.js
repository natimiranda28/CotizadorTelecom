
const costoBase = 1000;


let fm;


let vivienda = prompt(
    "Ingrese el tipo de vivienda a cotizar:\n" +
    "1 - Casa\n" +
    "2 - P.H.\n" +
    "3 - Dto. Edificio\n" +
    "4 - Barrio Privado\n" +
    "5 - Oficina\n" +
    "6 - Local comercial\n" +
    "7 - Depósito logística"
);


switch (vivienda) {
    case "1":
        fm = 1.009;
        break;
    case "2":
        fm = 1.005;
        break;
    case "3":
        fm = 1.002;
        break;
    case "4":
        fm = 1.019;
        break;
    case "5":
        fm = 1.039;
        break;
    case "6":
        fm = 1.041;
        break;
    case "7":
        fm = 1.092;
        break;
    default:
        console.warn("El valor ingresado no corresponde a un tipo de vivienda válido.");
}


let metros = prompt("Ingrese la cantidad de metros cuadrados de la vivienda:");


metros = parseInt(metros);


if (fm > 1.000 && Number.isInteger(metros) && metros > 0) {
    let total = costoBase * metros * fm;
    console.log("El valor de la póliza es: $" + total.toFixed(2));
} else {
    console.warn("Error en los datos ingresados. Verifique que la vivienda sea válida y los metros cuadrados sean correctos.");
}
