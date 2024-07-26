

    const header = document.querySelector('header');


    function handleScroll() {
        if (window.scrollY > 50) { 
            header.classList.add('header-hidden');
        } else {
            header.classList.remove('header-hidden');
        }
    }

    // Añade el listener de evento para el scroll
    window.addEventListener('scroll', handleScroll);



