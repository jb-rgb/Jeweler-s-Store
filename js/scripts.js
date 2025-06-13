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
  "aretes-oro-zafiro": {
    nombre: "Aretes de Oro con Zafiro",
    descripcion:
      "Estos aretes elaborados en oro de alta pureza enmarcan el profundo azul del zafiro natural, una piedra asociada con la sabiduría, la protección y la elegancia atemporal. Su diseño clásico con acabados artesanales resalta la intensidad del mineral, convirtiéndolos en una pieza versátil tanto para ocasiones especiales como para elevar tu estilo diario.",
    precio: 25000,
    stock: 100,
    imagen: "img/ChatGPT Image 12 jun 2025, 04_07_50 p.m..png",
  },
  "aretes-platino-diamante": {
    nombre: "Aretes de Platino con Diamantes",
    descripcion:
      "Una joya que encarna la pureza y la sofisticación. Estos aretes están fabricados en platino —el metal más noble y duradero— y engastados con diamantes naturales de brillo excepcional. Su diseño minimalista y atemporal los convierte en una pieza imprescindible para quienes valoran la elegancia discreta y el lujo auténtico. Ideales para celebraciones inolvidables o como un regalo eterno.",
    precio: 55000,
    stock: 80,
    imagen: "img/ChatGPT Image 12 jun 2025, 04_08_02 p.m..png",
  },
  "aretes-plata-esmeralda": {
    nombre: "Aretes de Oro con Esmeraldas y Diamantes",
    descripcion:
      "Inspirados en la frescura de la naturaleza, estos aretes de oro realzan el brillo intenso de las esmeraldas, símbolo de renovación y equilibrio. Su diseño delicado destaca la belleza orgánica de cada piedra, ofreciendo una combinación armoniosa entre lo artesanal y lo contemporáneo. Una pieza con carácter, perfecta para quienes buscan elegancia con un toque de color y significado.",
    precio: 85000,
    stock: 200,
    imagen: "img/ChatGPT Image 12 jun 2025, 04_08_04 p.m..png",
  },
  "aretes-platino-esmeralda": {
    nombre: "Aretes de Platino con Esmeraldas y Diamantes",
    descripcion: "Una pieza que fusiona majestuosidad y delicadeza. Estos aretes están elaborados en platino puro, símbolo de fortaleza y distinción, y engastan con precisión esmeraldas de tono profundo junto a diamantes naturales que realzan su luz. La combinación de piedras preciosas crea un contraste armonioso entre la serenidad del verde y el resplandor del blanco, ideal para quienes buscan elegancia con una presencia inolvidable.",
    precio: 95000,
    stock: 120,
    imagen: "img/ChatGPT Image 12 jun 2025, 04_08_06 p.m..png",
  },
  "collar-oro-zafiro": {
    nombre: "Collar de Oro con Zafiro y Diamantes",
    descripcion: "Este collar combina la calidez del oro con la profundidad hipnótica del zafiro azul y el fulgor de diamantes naturales, creando una pieza de alto refinamiento. Cada detalle ha sido cuidadosamente trabajado para resaltar la piedra central, símbolo de sabiduría y realeza, enmarcada por destellos de luz que evocan elegancia atemporal. Ideal para marcar momentos inolvidables o como herencia con alma.",
    precio: 35000,
    stock: 100,
    imagen: "img/ChatGPT Image 12 jun 2025, 04_17_47 p.m..png",
  },
  "collar-platino-diamante": {
    nombre: "Collar de Platino con Diamante",
    descripcion: "Una declaración de elegancia en su forma más pura. Este collar, elaborado en platino —conocido por su resistencia y rareza—, sostiene un diamante central de excepcional claridad y brillo. Su diseño minimalista enaltece la piedra sin distracciones, haciendo de esta joya una elección perfecta para quienes valoran el lujo discreto, la atemporalidad y la perfección en los detalles.",
    precio: 90000,
    stock: 180,
    imagen: "img/ChatGPT Image 12 jun 2025, 04_17_51 p.m..png",
  },
  "collar-oro-esmeralda": {
    nombre: "Collar de Oro con Esmeralda y Diamantes",
    descripcion: "Una joya que celebra la armonía entre la naturaleza y el lujo. Este collar está trabajado en oro de alta pureza y engastado con una esmeralda central de tono vibrante, símbolo de esperanza y renovación, acompañada por destellos de diamantes que realzan su esplendor. Su diseño equilibra lo clásico y lo contemporáneo, creando una pieza con carácter sereno y presencia luminosa.",
    precio: 45000,
    stock: 150,
    imagen: "img/ChatGPT Image 12 jun 2025, 04_19_27 p.m..png",
  },
  "collar-plata-rubi": {
    nombre: "Collar de Plata con Rubí y Diamantes",
    descripcion: "Este collar combina la nobleza de la plata con la intensidad del rubí y la sutileza de los diamantes, creando una joya cargada de pasión y sofisticación. El rubí, piedra del amor y la vitalidad, es el protagonista de esta pieza, realzado por el brillo delicado de diamantes que aportan equilibrio y luz. Perfecto para quien desea portar una joya con fuerza simbólica y belleza atemporal.",
    precio: 65000,
    stock: 100,
    imagen: "img/ChatGPT Image 12 jun 2025, 04_20_59 p.m..png",
  },
  "anillo-oro-zafiro": {
    nombre: "Anillo de Oro con Zafiro",
    descripcion: "Un clásico renovado con carácter y profundidad. Este anillo, elaborado en oro de alta pureza, sostiene un zafiro natural de tono azul profundo, piedra asociada con la sabiduría, la lealtad y la introspección. Su diseño limpio y atemporal lo convierte en una pieza ideal para marcar compromisos, aniversarios o simplemente para llevar contigo un símbolo de fortaleza interior con un toque de lujo sutil.",
    precio: 9000,
    stock: 80,
    imagen: "img/Leonardo_Phoenix_10_A_highly_detailed_realistic_gold_ring_with_0.jpg",
  },
  "anillo-oro-esmeralda": {
    nombre: "Anillo de Oro con Esmeralda",
    descripcion:
      "Este anillo fusiona la calidez del oro con la energía vibrante de una esmeralda natural, creando una joya que transmite vida, equilibrio y autenticidad. La esmeralda, símbolo de amor sincero y renacimiento, es el centro de esta pieza diseñada para destacar con sutileza y elegancia. Ideal para quienes valoran lo natural, lo eterno y lo profundamente significativo en cada detalle.",
    precio: 12000,
    stock: 250,
    imagen: "img/Leonardo_Phoenix_10_Create_an_exquisite_emerald_gemstone_ring_2 (1).jpg",
  },
  "anillo-platino-amatista": {
    nombre: "Anillo de Platino con Amatista y Diamantes",
    descripcion: "Una joya que inspira serenidad y distinción. Este anillo, forjado en platino —símbolo de fuerza y pureza—, enmarca una amatista de profundo tono violeta, conocida por su energía espiritual y su elegancia natural. A su alrededor, diamantes finamente engastados aportan luz y contraste, haciendo de esta pieza una expresión armoniosa de sofisticación, calma y belleza interior.",
    precio: 85000,
    stock: 300,
    imagen: "img/Leonardo_Phoenix_10_Render_a_highly_detailed_floralinspired_en_1.jpg",
  },
  "anillo-oro-rosa-esmeralda": {
    nombre: "Anillo de Oro Rosa con Esmeralda",
    descripcion:
      "Delicadeza y carácter en perfecta sintonía. Este anillo está elaborado en oro rosa, cuya calidez aporta un toque romántico y moderno, y sostiene una esmeralda natural de intenso color verde, símbolo de renovación y amor verdadero. Su contraste de tonos crea una joya única, femenina y vibrante, ideal para celebrar momentos que merecen ser recordados con elegancia y alma.",
    precio: 63000,
    stock: 200,
    imagen: "img/Leonardo_Phoenix_10_Render_an_elegant_engagement_ring_with_a_n_3.jpg",
  },
  "pulsera-oro-mariposa": {
    nombre: "Pulsera de Oro con Forma de Mariposa",
    descripcion:
      "Una joya que evoca transformación y libertad. Esta pulsera, elaborada en oro de alta pureza, presenta un delicado diseño de mariposa que simboliza el renacer, la belleza y el movimiento constante de la vida. Su silueta sutil y elegante abraza la muñeca con ligereza, convirtiéndola en una pieza ideal para quienes celebran su evolución personal con estilo y significado.",
    precio: 12000,
    stock: 180,
    imagen: "img/Leonardo_Phoenix_10_Render_a_delicate_14k_yellow_gold_bracelet_0.jpg",
  },
  "pulsera-plata-figura": {
    nombre: "Pulsera de Plata con Figuras",
    descripcion:
      "Una pieza que combina estilo y simbolismo en cada detalle. Esta pulsera de plata fina presenta un conjunto de figuras cuidadosamente trabajadas, que aportan dinamismo y personalidad al diseño. Ideal para quienes buscan una joya con carácter lúdico y elegante, capaz de adaptarse tanto a looks casuales como a momentos especiales con un toque único y auténtico.",
    precio: 550,
    stock: 120,
    imagen: "img/Leonardo_Phoenix_10_Render_a_feminine_charm_bracelet_in_sterli_2.jpg",
  },
  "pulsera-oro-piedra": {
    nombre: "Pulsera de Oro con Piedras Preciosas",
    descripcion:
      "Un recorrido de color, luz y significado. Esta pulsera, elaborada en oro de alta pureza, engasta una selección de piedras preciosas cuidadosamente elegidas por su belleza y simbolismo: rubí, zafiro, esmeralda y diamante se combinan en un diseño armonioso y atemporal. Cada gema aporta su propia energía, haciendo de esta joya una expresión de elegancia, fuerza y equilibrio para quien la porta.",
    precio: 125000,
    stock: 100,
    imagen: "img/Leonardo_Phoenix_10_Render_a_minimalist_gold_bracelet_with_a_h_0.jpg",
  },
  "pulsera-platino-flor": {
    nombre: "Pulsera de Platino con Flores",
    descripcion:
      "Una joya inspirada en la delicadeza de la naturaleza. Esta pulsera, trabajada en platino —metal noble y duradero—, presenta un diseño floral que evoca frescura, feminidad y belleza en constante florecimiento. Cada flor ha sido esculpida con precisión artesanal, creando una pieza que combina gracia orgánica con elegancia contemporánea. Perfecta para quien busca un accesorio sutil, simbólico y eterno.",
    precio: 12000,
    stock: 200,
    imagen: "img/Leonardo_Phoenix_10_Render_an_elegant_silver_bracelet_with_a_s_3.jpg",
  },
  "pulsera-platino": {
    nombre: "Pulsera de Platino",
    descripcion:
      "Una pieza de carácter firme y sofisticación discreta. Esta pulsera de platino ha sido diseñada para el hombre que valora la autenticidad y la solidez en cada detalle. Su acabado pulido y estructura minimalista reflejan una masculinidad contemporánea, sobria y atemporal. Ideal para acompañar el día a día con estilo o destacar en ocasiones especiales con un toque de distinción.oactivos suaves derivados del coco.",
    precio: 13000,
    stock: 150,
    imagen: "img/ChatGPT Image 12 jun 2025, 04_23_59 p.m..png",
  },
  "pulsera-piel-plata": {
    nombre: "Pulsera de Piel con Placa de Plata",
    descripcion:
      "Estilo urbano con esencia atemporal. Esta pulsera combina piel genuina de alta calidad con una placa de plata que aporta un toque refinado y personalizable. Su diseño sobrio y versátil la convierte en el accesorio ideal para el hombre que busca un complemento con carácter, perfecto para el día a día o como símbolo discreto de identidad y elegancia contemporánea.",
    precio: 1250,
    stock: 100,
    imagen: "img/ChatGPT Image 12 jun 2025, 04_59_36 p.m..png",
  },
  "pulsera-oro-esmeralda": {
    nombre: "Pulsera de Oro con Esmeralda",
    descripcion:
      "Una joya que combina fuerza y distinción. Esta pulsera, elaborada en oro sólido, incorpora una esmeralda natural como punto focal, aportando un contraste sutil entre la calidez del metal y la profundidad del verde. La esmeralda, símbolo de sabiduría y equilibrio, añade un significado personal a esta pieza masculina, ideal para quienes buscan elegancia con propósito y presencia con estilo.",
    precio: 12000,
    stock: 80,
    imagen: "img/ChatGPT Image 12 jun 2025, 05_00_28 p.m..png",
  },
  "pulsera-piedra-volcanica": {
    nombre: "Pulsera de Piedra Volcánica con Rubíes",
    descripcion:
      "Energía ancestral y elegancia contemporánea. Esta pulsera está compuesta por cuentas de piedra volcánica, conocidas por su conexión con la tierra y su simbolismo de fortaleza interior, combinadas con rubíes naturales que aportan intensidad y vitalidad. El contraste entre lo orgánico y lo precioso crea una pieza única, ideal para el hombre que busca un accesorio con identidad, carácter y significado profundo.",
    precio: 12500,
    stock: 200,
    imagen: "img/ChatGPT Image 12 jun 2025, 05_01_02 p.m..png",
  },
  "anillo-platino-topacio": {
    nombre: "Anillo de Platino con Topacio",
    descripcion:
      "Una pieza que refleja claridad, equilibrio y distinción. Este anillo está forjado en platino, símbolo de durabilidad y sofisticación, y engasta un topacio natural de tono cristalino o azul profundo, piedra asociada con la sabiduría, la comunicación y la confianza. Su diseño limpio y sólido lo convierte en un accesorio ideal para el hombre que valora los detalles con significado y la elegancia sin exceso.",
    precio: 12500,
    stock: 150,
    imagen: "img/IMG-20250611-WA0095.jpg",
  },
  "anillo-platino-perla": {
    nombre: "Anillo de Platino con Perla y Zafiros",
    descripcion:
      "Un anillo que desafía lo convencional con elegancia y carácter. Forjado en platino, este diseño combina la suavidad atemporal de una perla natural con la profundidad azul de zafiros engastados, creando un contraste audaz y refinado. La perla simboliza sabiduría interior y autenticidad, mientras los zafiros evocan claridad y fuerza. Una pieza para el hombre que aprecia la belleza con significado y estilo con propósito.",
    precio: 14000,
    stock: 100,
    imagen:
      "img/IMG-20250611-WA0099.jpg",
  },
  "anillo-platino-diamante": {
    nombre: "Anillo de Platino con Diamante y Esmeraldas",
    descripcion:
     "Un anillo que encarna poder, elegancia y profundidad. Fabricado en platino —metal de nobleza y resistencia—, esta pieza destaca por su diamante central de brillo impecable, flanqueado por esmeraldas de intenso verde que aportan un aura de sabiduría, protección y distinción. Su diseño estructurado y atemporal lo convierte en un símbolo de carácter firme y gusto sofisticado. Ideal para quienes ven en la joyería una extensión de su esencia.",
    precio: 64000,
    stock: 145,
    imagen: "img/IMG-20250611-WA0104.jpg"
  },
  "anillo-platino-turmalina": {
    nombre: "Anillo de Platino con Turmalina y Rubíes",
    descripcion:
     "Audaz y magnético, este anillo de platino combina la energía vibrante de la turmalina con la intensidad del rubí. Cada piedra ha sido seleccionada por su simbolismo: la turmalina, ligada a la transformación personal y al equilibrio interior; el rubí, asociado con la pasión, la fuerza y la determinación. El contraste de colores sobre el fondo sobrio del platino crea una pieza moderna y poderosa, pensada para el hombre que porta su historia con orgullo y decisión.",
    precio: 140000,
    stock: 230,
    imagen: "img/Leonardo_Phoenix_10_Render_a_bold_gothicstyle_engagement_ring_1.jpg"
  }
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
