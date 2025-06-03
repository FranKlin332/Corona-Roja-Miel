document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.scroll-hidden');
  
    const observer = new IntersectionObserver((entries, obs) => { // Crea un observador que va a mirar cuándo los elementos se cruzan con el viewport
      entries.forEach(entry => { // Cada entry representa un elemento que entró o salió de la vista.
        if (entry.isIntersecting) { // Verifica si el elemento está entrando a la vista del usuario
          entry.target.classList.add('scroll-show');
          obs.unobserve(entry.target); // para que se active solo una vez
        }
      });
    }, {
      threshold: 0.2 // significa que el efecto se activa cuando el 20% del elemento es visible.
    });
  
    elements.forEach(el => observer.observe(el)); // Le dice al observador que empiece a vigilar cada uno de los elementos con .scroll-hidden.


  // ---------------------------- HEADER FIJO ---------------------------------
  const headerBarra = document.querySelector("#barra");

  window.addEventListener("scroll", () => {
      let scroll = window.scrollY;
      // console.log(scroll)

      if (scroll > 88) {
      headerBarra.classList.add("barra-fija");
      } else {
      headerBarra.classList.remove("barra-fija");
      }
  })
});
  

