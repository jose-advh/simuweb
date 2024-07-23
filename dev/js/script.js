
    // Selecciona el elemento header
    const header = document.querySelector('header');

    // Función para cambiar la clase del header
    function handleScroll() {
        if (window.scrollY > 50) { // Cambia el valor de 50 según sea necesario
            header.classList.add('header-hidden');
        } else {
            header.classList.remove('header-hidden');
        }
    }

    // Añade el listener de evento para el scroll
    window.addEventListener('scroll', handleScroll);



