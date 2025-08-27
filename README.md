🏡 Cotizador de Pólizas de Vivienda

Este proyecto es una aplicación sencilla en **JavaScript**, acompañada de un HTML y CSS ya provistos, que permite calcular el valor estimado de una póliza de seguro de hogar o comercio.

El valor final de la póliza se obtiene a partir de:
- Los **metros cuadrados** de la vivienda.
- El **tipo de propiedad** seleccionada.
- La **ubicación geográfica** de la misma.
- Un **costo base por metro cuadrado** definido en el sistema.

📂 Estructura del proyecto

/proyecto
├── index.html          # Documento principal
├── /css
│    └── style.css      # Estilos de la interfaz
└── /js
├── variables.js   # Arrays con factores de propiedad y ubicación
└── app.js         # Lógica del cotizador

⚙️ Funcionamiento
1. El usuario ingresa, mediante cuadros de diálogo (`prompt()`):
   - Los metros cuadrados de la propiedad.
   - El tipo de propiedad (ejemplo: Casa, P.H., Oficina, etc.).
   - La ubicación geográfica (ejemplo: CABA, Tandil, etc.).

2. Los factores de cada propiedad y ubicación están definidos en **arrays de objetos** dentro de `variables.js`:
   ```js
   const datosPropiedad = [
       { tipo: "Casa", factor: 1.009 },
       { tipo: "P.H.", factor: 1.005 },
       { tipo: "Dto. Edificio", factor: 1.002 }
       // ...
   ];
3. `app.js`:

   * Busca en esos arrays los valores que coincidan con lo ingresado por el usuario.
   * Realiza las validaciones necesarias:

     * Que los metros cuadrados sean un número entero válido.
     * Que existan coincidencias de propiedad y ubicación.
     * Que los factores sean mayores a `1.000`.
   * Si todo es correcto, calcula el valor de la póliza:
Póliza = costoBase * metros² * factorPropiedad * factorUbicación
   * Muestra el resultado en consola con `console.log()`.

🖥️ Ejecución

1. Abrir `index.html` en un navegador web.
2. En pantalla se verá la estructura del cotizador.
3. Al cargar, aparecerán cuadros de diálogo pidiendo los datos.
4. El resultado se visualizará en la **consola del navegador** (`F12` → pestaña *Console*).


## 🛠️ Tecnologías utilizadas

* **HTML5**
* **CSS3**
* **JavaScript (Vanilla JS)**


## 🚀 Próximas mejoras

* Reemplazar `prompt()` y `console.log()` por inputs en el DOM y resultados dinámicos en pantalla.
* Validaciones más avanzadas en los formularios.
* Guardado de cotizaciones anteriores.


