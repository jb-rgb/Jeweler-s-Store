let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const navbar = document.getElementById("mainNavbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled-navbar");
  } else {
    navbar.classList.remove("scrolled-navbar");
  }
});

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  // Control de forma y tamaño (ya lo tienes)
  if (currentScrollY > 20) {
    navbar.classList.add("scrolled-navbar");
  } else {
    navbar.classList.remove("scrolled-navbar");
  }

  // Mostrar u ocultar según dirección del scroll
  if (currentScrollY > lastScrollY && currentScrollY > 300) {
    // Scroll hacia abajo
    navbar.classList.add("navbar-hidden");
  } else {
    // Scroll hacia arriba
    navbar.classList.remove("navbar-hidden");
  }

  lastScrollY = currentScrollY;
});

document.addEventListener("DOMContentLoaded", function () {
  const inputBusqueda = document.getElementById("busqueda");
  const botonesFiltro = document.querySelectorAll(".filtro");
  const productos = document.querySelectorAll(".producto");

  // Filtrado por categoría
  botonesFiltro.forEach((boton) => {
    boton.addEventListener("click", () => {
      const categoria = boton.getAttribute("data-filtro");

      productos.forEach((producto) => {
        const cat = producto.getAttribute("data-categoria");

        if (categoria === "todos" || categoria === cat) {
          producto.style.display = "block";
        } else {
          producto.style.display = "none";
        }
      });
    });
  });

  // Búsqueda por nombre
  inputBusqueda.addEventListener("input", () => {
    const valor = inputBusqueda.value.toLowerCase();

    productos.forEach((producto) => {
      const nombre = producto.getAttribute("data-nombre");
      if (nombre.includes(valor)) {
        producto.style.display = "block";
      } else {
        producto.style.display = "none";
      }
    });
  });
});

// Función para establecer cookie
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Función para obtener cookie
function getCookie(name) {
  const cname = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(cname) === 0) return c.substring(cname.length);
  }
  return "";
}

// Mostrar banner si aún no se aceptaron cookies
window.onload = function () {
  if (!getCookie("cookiesAccepted")) {
    document.getElementById("cookieConsent").classList.remove("d-none");
  }

  document.getElementById("acceptCookies").onclick = function () {
    setCookie("cookiesAccepted", "true", 365);
    document.getElementById("cookieConsent").classList.add("d-none");
  };
};

const productos = {
  "jabon-azucar": {
    nombre: "Jabón de Azúcar",
    descripcion:
      "Hecho con azúcar morena, aceite esencial de limón, glicerina vegetal, aceites naturales, extractos botánicos, conservadores naturales (como vitamina E), tensioactivos suaves derivados del coco.",
    precio: 60,
    stock: 100,
    imagen: "img/100gr jabón en barra azúcar y limón .jpg",
  },
  "jabon-anis": {
    nombre: "Jabón Anís Estrellado",
    descripcion:
      "Hecho con extracto de anís estrellado, glicerina vegetal, aceites naturales, extractos botánicos, conservadores naturales (como vitamina E), tensioactivos suaves derivados del coco.",
    precio: 55,
    stock: 80,
    imagen: "img/Jabón anís estrellado_.jpg",
  },
  "jabon-aloe-vera": {
    nombre: "Jabón de Aloe Vera",
    descripcion:
      "Aloe vera, extracto de salvia, glicerina vegetal, aceites naturales, extractos botánicos, conservadores naturales (como vitamina E), tensioactivos suaves derivados del coco.",
    precio: 55,
    stock: 200,
    imagen: "img/Jabón barra 100 gr de alo vera_.jpg",
  },
  "aceite-canela": {
    nombre: "Aceite Esencia de Canela",
    descripcion: "Hecho con extracto de canela.",
    precio: 95,
    stock: 120,
    imagen: "img/aceite escencia de canela.jpg",
  },
  "aceite-eucalipto": {
    nombre: "Aceite Esencia de Eucalipto",
    descripcion: "Hecho con extracto de eucalipto.",
    precio: 90,
    stock: 100,
    imagen: "img/aceite escencial de eucalipto.jpg",
  },
  "aceite-limon": {
    nombre: "Aceite Esencia de Limón",
    descripcion: "Hecho con extracto de limón.",
    precio: 90,
    stock: 180,
    imagen: "img/aceite escencial de limon .jpg",
  },
  "aceite-naranja": {
    nombre: "Aceite Esencia de Naranja",
    descripcion: "Hecho con extracto de naranja dulce.",
    precio: 90,
    stock: 150,
    imagen: "img/aceite escencial de naranja  .jpg",
  },
  "aceite-yerba-buena": {
    nombre: "Aceite Esencia de Yerba Buena",
    descripcion: "Hecho con extracto de yerba buena.",
    precio: 90,
    stock: 100,
    imagen: "img/aceite escencial de yerba buena .jpg",
  },
  "aceite-menta": {
    nombre: "Aceite Esencia de Menta",
    descripcion: "Hecho con extracto de menta piperita.",
    precio: 90,
    stock: 80,
    imagen: "img/menta piperita.jpg",
  },
  "mascarilla-coco": {
    nombre: "Mascarilla (Coco y Piña)",
    descripcion:
      "Hecho con aceite de coco, extracto de piña, glicerina vegetal, aceites naturales, extractos botánicos, conservadores naturales (como vitamina E), tensioactivos suaves derivados del coco.",
    precio: 120,
    stock: 250,
    imagen: "img/Mascarillas cabello rizado y aceite de coco y piña_.jpg",
  },
  "pasta-dental": {
    nombre: "Pasta Dental Yerba Buena (Cápsulas)",
    descripcion: "Hecho con extracto de yerba buena, arcilla blanca.",
    precio: 85,
    stock: 300,
    imagen: "img/Pasta detal yerba buena en cápsulas_.jpg",
  },
  "shampoo-lavanda": {
    nombre: "Shampoo de Lavanda",
    descripcion:
      "Hecho con aceite esencial de lavanda, glicerina vegetal, aceites naturales, extractos botánicos, conservadores naturales (como vitamina E), tensioactivos suaves derivados del coco.",
    precio: 130,
    stock: 200,
    imagen: "img/Lavanda shampoo_.jpg",
  },
  "shampoo-arroz": {
    nombre: "Shampoo de Arroz",
    descripcion:
      "Hecho con extracto de arroz orgánico, glicerina vegetal, aceites naturales, extractos botánicos, conservadores naturales (como vitamina E), tensioactivos suaves derivados del coco.",
    precio: 120,
    stock: 180,
    imagen: "img/Shampoo arroz_.jpg",
  },
  "shampoo-cafe": {
    nombre: "Shampoo de Café",
    descripcion:
      "Hecho con extracto de café, glicerina vegetal, aceites naturales, extractos botánicos, conservadores naturales (como vitamina E), tensioactivos suaves derivados del coco.",
    precio: 125,
    stock: 120,
    imagen: "img/Shampoo café_.jpg",
  },
  "shampoo-clavo": {
    nombre: "Shampoo de Clavo de Olor",
    descripcion:
      "Hecho con extracto de clavo de olor, glicerina vegetal, aceites naturales, extractos botánicos, conservadores naturales (como vitamina E), tensioactivos suaves derivados del coco.",
    precio: 125,
    stock: 100,
    imagen: "img/Shampoo clavo de olor.jpg",
  },
  "shampoo-aloe-vera": {
    nombre: "Shampoo de Aloe Vera",
    descripcion:
      "Hecho con aloe vera, aceite de oliva, glicerina vegetal, aceites naturales, extractos botánicos, conservadores naturales (como vitamina E), tensioactivos suaves derivados del coco.",
    precio: 120,
    stock: 200,
    imagen: "img/Shampoo de áloe vera_.jpg",
  },
  "shampoo-linaza": {
    nombre: "Shampoo de Linaza",
    descripcion:
      "Hecho con linaza, canela, glicerina vegetal, aceites naturales, extractos botánicos, conservadores naturales (como vitamina E), tensioactivos suaves derivados del coco.",
    precio: 130,
    stock: 150,
    imagen: "img/Shampoo de linaza_.jpg",
  },
  "shampoo-hibiscus": {
    nombre: "Shampoo de Hibiscus",
    descripcion:
      "Hecho con flor de hibisco, glicerina vegetal, aceites naturales, extractos botánicos, conservadores naturales (como vitamina E), tensioactivos suaves derivados del coco.",
    precio: 125,
    stock: 100,
    imagen: "img/Shampoo hibiscus_.jpg",
  },
  "shampoo-jarilla": {
    nombre: "Shampoo de Jarilla",
    descripcion:
      "Hecho con extracto de jarilla mixteca, glicerina vegetal, aceites naturales, extractos botánicos, conservadores naturales (como vitamina E), tensioactivos suaves derivados del coco.",
    precio: 120,
    stock: 80,
    imagen: "img/SHAMPOO Jarilla mixteca_.jpg",
  },
  "shampoo-miel": {
    nombre: "Shampoo de Miel y Manzanilla",
    descripcion:
      "Hecho con miel de abeja, extracto de manzanilla, glicerina vegetal, aceites naturales, extractos botánicos, conservadores naturales (como vitamina E), tensioactivos suaves derivados del coco.",
    precio: 125,
    stock: 200,
    imagen: "img/Shampoo miel y manzanilla_.jpg",
  },
  "shampoo-romero": {
    nombre: "Shampoo de Romero",
    descripcion:
      "Hecho con extracto de romero, glicerina vegetal, aceites naturales, extractos botánicos, conservadores naturales (como vitamina E), tensioactivos suaves derivados del coco.",
    precio: 125,
    stock: 150,
    imagen: "img/Shampoo romero_.jpg",
  },
  "suero-cebolla": {
    nombre: "Suero de Crecimiento Capilar (Cebolla)",
    descripcion:
      "Hecho con cebolla, romero, jengibre, glicerina vegetal, aceites naturales, extractos botánicos, conservadores naturales (como vitamina E), tensioactivos suaves derivados del coco.",
    precio: 140,
    stock: 100,
    imagen:
      "img/Suero de crecimiento capilar de cebolla, romero y gengibre_.jpg",
  },
};

// Restaurar stock si existe
const stockGuardado = localStorage.getItem("stock");
if (stockGuardado) {
  const productosGuardados = JSON.parse(stockGuardado);
  for (const id in productosGuardados) {
    if (productos[id]) {
      productos[id].stock = productosGuardados[id].stock;
    }
  }
}

// Abre el modal con los datos del producto
function abrirProducto(id) {
  const prod = productos[id];
  if (!prod) return;

  document.getElementById("modalTitulo").textContent = prod.nombre;
  document.getElementById("modalDescripcion").textContent = prod.descripcion;
  document.getElementById("modalPrecio").textContent = `$${prod.precio}`;
  document.getElementById("modalImagen").src = prod.imagen;
  document.getElementById("modalStock").textContent =
    prod.stock > 0 ? `Stock disponible: ${prod.stock}` : "Sin inventario";
  document.getElementById("modalCantidad").value = 1;
  document.getElementById("btnAgregar").setAttribute("data-id", id);
  document.getElementById("btnAgregar").disabled = prod.stock === 0;

  const modal = new bootstrap.Modal(document.getElementById("modalProducto"));
  modal.show();
}

// Agrega producto al carrito
function agregarAlCarrito(btn) {
  const id = btn.getAttribute("data-id");
  const cantidad = parseInt(document.getElementById("modalCantidad").value);
  const prod = productos[id];

  // Validación
  if (cantidad <= 0 || !prod || prod.stock < cantidad) {
    alert("Cantidad no disponible o inventario insuficiente");
    return;
  }

  // Agregar al carrito o actualizar cantidad
  const existente = carrito.find((p) => p.id === id);
  if (existente) {
    existente.cantidad += cantidad;
  } else {
    carrito.push({
      id: id,
      nombre: prod.nombre,
      precio: prod.precio,
      cantidad: cantidad,
      imagen: prod.imagen,
    });
  }

  // Reducir stock del producto
  productos[id].stock -= cantidad;

  // Actualizar UI del carrito
  actualizarCarrito();

  localStorage.setItem("carrito", JSON.stringify(carrito));
  localStorage.setItem("stock", JSON.stringify(productos));

  // Cerrar el modal
  const modal = bootstrap.Modal.getInstance(document.getElementById("modalProducto"));
  if (modal) modal.hide();

  // Actualizar contenido del modal por si el usuario vuelve a abrirlo
  //abrirProducto(id);
}

// Actualiza el contenido del carrito
function actualizarCarrito() {
  const contenedor = document.getElementById("carritoContenido");
  const total = document.getElementById("carritoTotal");

  if (!contenedor || !total) return; // solo aplica en carrito.html

  contenedor.innerHTML = "";
  let suma = 0;

  if (carrito.length === 0) {
    contenedor.innerHTML = '<p class="text-center">El carrito está vacío.</p>';
    total.textContent = "$0.00";
    return;
  }

  carrito.forEach((item) => {
    const subtotal = item.precio * item.cantidad;
    suma += subtotal;

    const div = document.createElement("div");
    div.className = "d-flex justify-content-between align-items-center mb-2";
    div.innerHTML = `
      <div>
        <strong>${item.nombre}</strong> x${item.cantidad} - $${subtotal.toFixed(
      2
    )}
      </div>
      <button class="btn btn-sm btn-danger" onclick="eliminarDelCarrito('${
        item.id
      }')">
        <i class="bi bi-trash"></i>
      </button>
    `;
    contenedor.appendChild(div);
  });

  total.textContent = `$${suma.toFixed(2)}`;
}

// Elimina un producto del carrito y restaura stock
function eliminarDelCarrito(id) {
  const producto = carrito.find(p => p.id === id);
  if (producto) {
    productos[id].stock += producto.cantidad; // restaurar stock

    carrito = carrito.filter(p => p.id !== id); // eliminar del array

    localStorage.setItem("carrito", JSON.stringify(carrito));
    localStorage.setItem("stock", JSON.stringify(productos));

    mostrarCarrito(); // usa la variable global actualizada
  }
}

function mostrarCarrito() {
  const contenedor = document.getElementById("carritoContenido");
  contenedor.innerHTML = "";

  if (carrito.length === 0) {
    contenedor.innerHTML = "<p class='text-center'>Tu carrito está vacío.</p>";
    document.getElementById("carritoTotal").textContent = "$0.00";
    return;
  }

  carrito.forEach((producto) => {
    const item = document.createElement("div");
    item.className = "card mb-4 shadow-sm";

    item.innerHTML = `
      <div class="row g-0 align-items-center">
        <div class="col-md-3 text-center">
          <img src="${producto.imagen}" class="img-fluid rounded-start p-2" alt="${producto.nombre}">
        </div>
        <div class="col-md-9">
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text mb-1"><strong>Cantidad:</strong> ${producto.cantidad}</p>
            <p class="card-text mb-1"><strong>Precio unitario:</strong> $${producto.precio}</p>
            <p class="card-text mb-3"><strong>Total:</strong> $${(producto.precio * producto.cantidad).toFixed(2)}</p>
            <button class="btn btn-danger btn-sm" onclick="eliminarDelCarrito('${producto.id}')">Eliminar del carrito</button>
          </div>
        </div>
      </div>
    `;

    contenedor.appendChild(item);
  });

  const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
  document.getElementById("carritoTotal").textContent = `$${total.toFixed(2)}`;
}

function abrirModalPago() {
  document.getElementById("formularioPago").innerHTML = generarFormularioPago("tarjeta");
  document.getElementById("metodoPago").value = "tarjeta";
  document.getElementById("metodoPago").addEventListener("change", function () {
    const metodo = this.value;
    document.getElementById("formularioPago").innerHTML = generarFormularioPago(metodo);
  });

  const modal = new bootstrap.Modal(document.getElementById("modalPago"));
  modal.show();
}

function generarFormularioPago(metodo) {
  switch (metodo) {
    case "tarjeta":
      return `
        <div class="row g-3">
          <div class="col-md-6">
            <input class="form-control" placeholder="Nombre en la tarjeta">
          </div>
          <div class="col-md-6">
            <input class="form-control" placeholder="Número de tarjeta">
          </div>
          <div class="col-md-6">
            <input class="form-control" placeholder="MM/AA">
          </div>
          <div class="col-md-6">
            <input class="form-control" placeholder="CVV">
          </div>
        </div>`;
    case "spei":
      return `<p>Realiza una transferencia a CLABE: <strong>1234567890123456</strong><br>Banco: Banamex</p>`;
    case "oxxo":
      return `<p>Usa este código para pagar en OXXO: <strong>1234 5678 9012 3456</strong></p>`;
    case "mercado_pago":
      return `<p>Redirigiendo a Mercado Pago...</p>`;
    case "paypal":
      return `<p>Redirigiendo a PayPal...</p>`;
    default:
      return "";
  }
}

function procesarPago() {
  Swal.fire({
    icon: "success",
    title: "¡Pago exitoso!",
    text: "Gracias por tu compra.",
    confirmButtonText: "Aceptar"
  }).then(() => {
    carrito = [];
    localStorage.removeItem("carrito");
    localStorage.removeItem("stock");
    actualizarCarrito();
    mostrarCarrito();
  });

  const modal = bootstrap.Modal.getInstance(document.getElementById("modalPago"));
  if (modal) modal.hide();
}
