document.addEventListener('DOMContentLoaded', function () {

    // ___________________ BARRA MENU ______________________
    const barraFlex = document.querySelector(".barra__flex");
    const menuHambur = document.querySelector(".barra__menu");
    const nav = document.querySelector(".navegacion__links");
    const mediaQuery = window.matchMedia('(max-width: 860px)'); // Te deja detectar el tamaño de la pantalla (o cualquier media query CSS) desde JavaScript, y además, te permite ejecutar código cuando esa condición cambia, por ejemplo si el usuario redimensiona la ventana. Devuelve true o false
  
    menuHambur.addEventListener("click", (e) => {
        // console.log(e.target.classList);
        barraFlex.classList.toggle("menu-active");
        nav.classList.toggle("nav-activo")
    });

    // Cerrar el menú al cambiar de tamaño de ventana
    window.addEventListener("resize", () => {
        if(window.innerWidth > 860) {
            barraFlex.classList.remove("menu-active");
            nav.classList.remove("nav-activo")
        }
    })


    // ____________ ELIMINAR CONTENEDOR ______________
    mediaQuery.addEventListener('change', actualizarClases);
    function actualizarClases(e) {
      if (e.matches) {
        barraFlex.classList.remove('contenedor');
      } else {
        barraFlex.classList.add('contenedor');
      }
    }
    // Ejecutar al cargar
    actualizarClases(mediaQuery); // Esto ejecuta la función una vez al cargar la página, usando el objeto mediaQuery como argumento.

});

