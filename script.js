document.addEventListener('DOMContentLoaded', function () {
    const sidemenuToggler = document.querySelector('.sidemenu-toggler');
    const sidemenu = document.querySelector('.sidemenu');
    const closeSidemenu = document.querySelector('.sidemenu a.close');

    sidemenuToggler.addEventListener('click', function () {
        sidemenu.classList.toggle('open');
    });

    closeSidemenu.addEventListener('click', function () {
        sidemenu.classList.remove('open');
    });
});
    // JavaScript to toggle side menu
    document.addEventListener('DOMContentLoaded', function () {
        var menuToggle = document.getElementById('menuToggle');
        var sideMenu = document.querySelector('.sidemenu');

        menuToggle.addEventListener('click', function () {
            sideMenu.classList.toggle('open');
        });
    });


