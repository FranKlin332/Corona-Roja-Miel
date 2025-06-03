document.addEventListener("DOMContentLoaded", () => {
    // ------------ SWIPER HEADER -----------
    const swiper = new Swiper('.mySwiper-1', {
        direction: 'horizontal',
        loop: true, // si llega a la ultima foto, vuelve a la primera
        autoplay: {
            delay: 6000, // pase automaticamente
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        on: { // Estas funciones están dentro de la configuración de Swiper y controlan lo que pasa cuando cambias de slide.
            slideChangeTransitionStart: function () {
                // Oculta todos los textos
                document.querySelectorAll('.hero__contenido').forEach(el => {
                    el.classList.remove('mostrar'); // Quita la clase mostrar a todos los elementos .hero__contenido. Para asegurarse de que no se muestre texto en los otros slides mientras cambia el slide.
                }); 
            },
            slideChangeTransitionEnd: function () {
                // Muestra el texto del slide activo
                const activeSlide = document.querySelector('.swiper-slide-active .hero__contenido');
                if (activeSlide) {
                    activeSlide.classList.add('mostrar'); // Busca el texto (.hero__contenido) del slide activo y le añade la clase mostrar.
                }
            }
        }
    });

    if (
        document.visibilityState === 'visible' &&
        typeof swiper !== 'undefined' &&
        swiper instanceof Swiper &&
        typeof swiper.update === 'function'
    ) {
        swiper.update();
        swiper.slideTo(swiper.activeIndex, 0, false);

        const activeSlide = document.querySelector('.swiper-slide-active .hero__contenido');
        if (activeSlide) {
            activeSlide.classList.add('mostrar');
        }
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

    btns.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modalImg.src = fichas[index];
            modal.classList.add('modal--visible');
            document.body.classList.add('modal-open');
        });
    });

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    function closeModal() {
        modal.classList.remove('modal--visible');
        document.body.classList.remove('modal-open');
        modalImg.src = '';
    }
})