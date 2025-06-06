document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper('.mySwiper-1', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 6000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            init: function () {
                // Esperar un poco para asegurar que el texto esté cargado
                setTimeout(() => {
                    const activeSlide = document.querySelector('.swiper-slide-active .hero__contenido');
                    if (activeSlide) {
                        activeSlide.classList.add('mostrar');
                    }
                }, 100); // podés ajustar este valor si hace falta
            },
            slideChangeTransitionStart: function () {
                document.querySelectorAll('.hero__contenido').forEach(el => {
                    el.classList.remove('mostrar');
                });
            },
            slideChangeTransitionEnd: function () {
                const activeSlide = document.querySelector('.swiper-slide-active .hero__contenido');
                if (activeSlide) {
                    activeSlide.classList.add('mostrar');
                }
            }
        }
    });

    // Mantenimiento
    if (
        document.visibilityState === 'visible' &&
        typeof swiper !== 'undefined' &&
        swiper instanceof Swiper &&
        typeof swiper.update === 'function'
    ) {
        swiper.update();
        swiper.slideTo(swiper.activeIndex, 0, false);
    }

    // --------------------- MODAL --> FICHA -------------------
    const modal = document.querySelector('#modal');
    const modalImg = document.querySelector('#modalImg');
    const modalClose = document.querySelector('#modalClose');
    const modalOverlay = document.querySelector('#modalOverlay');
    const btns = document.querySelectorAll('.producto__btn');

    const fichas = {
        0: 'img/ficha-1kg.png',
        1: 'img/ficha-500g.png',
        2: 'img/ficha-250g.png',
        3: 'img/ficha-40g.png',
        4: 'img/ficha-20g.png'
    };

    // Precargar las imágenes
    Object.values(fichas).forEach(src => {
        const img = new Image();
        img.src = src;
    });

    btns.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modalImg.src = fichas[index]; // Se cambia la imagen del modal por la ficha correcta según el index.
            modal.classList.add('modal--visible'); // muestra el modal
            document.body.classList.add('modal-open'); // Se desactiva el scroll del fondo 
        }); 
    });

    modalClose.addEventListener('click', closeModal); // con "X"

    // Cerrar modal si se hace clic fuera de la imagen
    modal.addEventListener('click', function (e) {
        if ( // Si el clic ocurre sobre:
            e.target === modal || // el fondo
            e.target === modalOverlay || // el overlay
            e.target === modal.querySelector('.modal__content')
        ) {
            closeModal();
        }
    });

    // Prevenir cierre si se hace clic en la imagen
    modalImg.addEventListener('click', (e) => e.stopPropagation());

    function closeModal() {
        modal.classList.remove('modal--visible');
        document.body.classList.remove('modal-open');
        modalImg.src = '';
    }
});
