// script.js

// Función para validar el formulario de contacto
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario para validarlo
  
    // Obtener valores de los campos del formulario
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
  
    // Validación básica: asegurarse de que todos los campos sean completados
    if (name === "" || email === "" || message === "") {
      alert("Por favor, completa todos los campos.");
      return;
    }
  
    // Simular el envío de un mensaje (esto podría integrarse con un servidor real)
    alert("Gracias por tu mensaje, " + name + ". Nos pondremos en contacto contigo pronto.");
    
    // Limpiar los campos del formulario después de enviarlo
    document.querySelector("form").reset();
  });
  
  // Carrito de compras
  let cart = [];
  
  // Función para agregar productos al carrito
  function addToCart(productName) {
    cart.push(productName);
    alert(productName + " ha sido añadido a tu carrito.");
    updateCartDisplay();
  }
  
  // Función para actualizar la visualización del carrito
  function updateCartDisplay() {
    let cartCount = cart.length;
    document.querySelector(".cart-count").textContent = cartCount;
  }
  
  // Función para mostrar el contenido del carrito (puedes usar esta en un modal o una página separada)
  function viewCart() {
    if (cart.length === 0) {
      alert("Tu carrito está vacío.");
    } else {
      alert("Tu carrito contiene: \n" + cart.join("\n"));
    }
  }
  
  // Asignar la acción de agregar al carrito a los botones de los productos
  const buyButtons = document.querySelectorAll(".buy-button");
  buyButtons.forEach(button => {
    button.addEventListener("click", function(event) {
      const productName = event.target.previousElementSibling.previousElementSibling.textContent;
      addToCart(productName);
    });
  });
  
  // Mostrar el carrito al hacer clic en el icono del carrito
  document.querySelector(".cart img").addEventListener("click", viewCart);
  