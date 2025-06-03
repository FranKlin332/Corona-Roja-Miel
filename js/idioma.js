document.addEventListener("DOMContentLoaded", () => {
        // ___________________ CAMBIAR IDIOMA ________________

    const languageBtn = document.querySelectorAll("[data-language]");
    const textACambiar = document.querySelectorAll("[data-section]");

    // Detectar si estamos en subcarpeta
    const basePath = window.location.pathname.includes('nosotros') ||
                    window.location.pathname.includes('proceso') ||
                    window.location.pathname.includes('productos') ? '../json/' : './json/';

    // Función para cargar idioma
    function cargarIdioma(idioma) {
        fetch(`${basePath}${idioma}.json`)
            .then(res => res.json())
            .then(data => {
                textACambiar.forEach(element => {
                    const section = element.dataset.section;
                    const value = element.dataset.value;
                    if (data[section] && data[section][value]) {
                        element.innerHTML = data[section][value];
                    }
                });
            });
    }

    // Al cargar la página, usar idioma guardado o "es"
    const idiomaGuardado = localStorage.getItem("idioma") || "es";
    cargarIdioma(idiomaGuardado);

    // Cambiar idioma al hacer clic
    languageBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            const idioma = btn.dataset.language;
            localStorage.setItem("idioma", idioma);
            cargarIdioma(idioma);
        });
    });
});