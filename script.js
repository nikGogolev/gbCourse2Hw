let navigationMenu = document.querySelector('.navigationmenu');
let navigationMenuOpen = document.querySelector('.navigationmenu-open');
navigationMenuOpen.onclick = function () {
    navigationMenu.classList.add('display');
    let navigationMenuClose = navigationMenu.querySelector('.navigationmenu-close');
    navigationMenuClose.onclick = function () {
        navigationMenu.classList.remove('display');
    }
}