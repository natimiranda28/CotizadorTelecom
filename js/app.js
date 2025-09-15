// ====== Config ======
const costoM2 = 1.16; // costo base por m² (estático)

// ====== Enlaces al DOM ======
const selPropiedad = document.getElementById("propiedad");
const selUbicacion = document.getElementById("ubicacion");
const inputMetros = document.getElementById("metros2");
const btnCotizar = document.querySelector(".button");
const spanValor = document.getElementById("valorPoliza");

// ====== Carga dinámica de <select> ======
function cargarComboPropiedad() {
  // Resetea e inserta placeholder
  selPropiedad.innerHTML = `<option selected disabled value="">...</option>`;
  // Arma options desde datosPropiedad (variables.js)
  let html = "";
  for (const item of datosPropiedad) {
    html += `<option value="${item.tipo}">${item.tipo}</option>`;
  }
  selPropiedad.innerHTML += html;
}

function cargarComboUbicacion() {
  selUbicacion.innerHTML = `<option selected disabled value="">...</option>`;
  let html = "";
  for (const item of datosUbicacion) {
    html += `<option value="${item.tipo}">${item.tipo}</option>`;
  }
  selUbicacion.innerHTML += html;
}

// ====== Búsqueda de factores según selección ======
function obtenerFactoresSeleccionados() {
  const tipoPropSel = selPropiedad.value;   // ej. "Casa"
  const tipoUbiSel = selUbicacion.value;    // ej. "CABA"

  // Busca el objeto en cada array por 'tipo'
  const fmPropiedad = datosPropiedad.find(p => p.tipo === tipoPropSel);
  const fmUbicacion = datosUbicacion.find(u => u.tipo === tipoUbiSel);

  return { fmPropiedad, fmUbicacion };
}

// ====== Utilidades ======
function formatearARS(valor) {
  
  return new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 2 }).format(valor);
}

function animarBoton() {

  btnCotizar.animate(
    [
      { transform: "scale(1)", opacity: 1 },
      { transform: "scale(0.98)", opacity: 0.9 },
      { transform: "scale(1)", opacity: 1 }
    ],
    { duration: 220, easing: "ease-out" }
  );
}

// ====== Validaciones ======
function validarEntrada(metros, fmPropiedad, fmUbicacion) {
  const esEntero = Number.isInteger(metros);
  const mayorCero = metros > 0;
  const fmValidos = fmPropiedad?.factor > 1.0 && fmUbicacion?.factor >= 1.0;

  // Si el input tiene min/max, respetarlos también
  const min = inputMetros.min ? parseInt(inputMetros.min) : 1;
  const max = inputMetros.max ? parseInt(inputMetros.max) : Infinity;
  const dentroDeRango = metros >= min && metros <= max;

  if (!esEntero || !mayorCero || !dentroDeRango) {
    console.warn("Metros cuadrados inválidos. Debe ser un entero entre", min, "y", max);
    return false;
  }
  if (!fmPropiedad) {
    console.warn("Seleccioná un tipo de propiedad válido.");
    return false;
  }
  if (!fmUbicacion) {
    console.warn("Seleccioná una ubicación válida.");
    return false;
  }
  if (!fmValidos) {
    console.warn("Los factores seleccionados no son válidos (> 1.000 para propiedad, ≥ 1.000 para ubicación).");
    return false;
  }
  return true;
}

// ====== Cálculo ======
function calcularPoliza() {
  animarBoton();

  const metros = parseInt(inputMetros.value);
  const { fmPropiedad, fmUbicacion } = obtenerFactoresSeleccionados();

  if (!validarEntrada(metros, fmPropiedad, fmUbicacion)) {
    spanValor.textContent = "0.00";
    return;
  }

  const total = costoM2 * metros * fmPropiedad.factor * fmUbicacion.factor;

  // Log detallado en consola como pide la consigna
  console.log("=== Cálculo de póliza ===");
  console.log("Metros²:", metros);
  console.log("Propiedad:", fmPropiedad.tipo, "| factor:", fmPropiedad.factor);
  console.log("Ubicación:", fmUbicacion.tipo,  "| factor:", fmUbicacion.factor);
  console.log("Costo base m²:", costoM2);
  console.log("Resultado:", formatearARS(total));

  // Mostrar en el HTML formateado (y sin símbolo si preferís)
  spanValor.textContent = new Intl.NumberFormat("es-AR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(total);
}

// ====== Init ======
document.addEventListener("DOMContentLoaded", () => {
  cargarComboPropiedad();
  cargarComboUbicacion();
  btnCotizar.addEventListener("click", calcularPoliza);
});
