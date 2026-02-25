function toggleDescription(id) {
    var desc = document.getElementById(id);
    if (desc.style.display === 'none') {
        desc.style.display = 'block';
    } else {
        desc.style.display = 'none';
    }
}

function toggleMenu() {
    var menu = document.getElementById('menuDropdown');
    menu.classList.toggle('d-none');
}

document.addEventListener('click', function(event) {
    var menu = document.getElementById('menuDropdown');
    var toggle = document.querySelector('.menu-toggle');
    if (menu && !menu.contains(event.target) && !toggle.contains(event.target)) {
        menu.classList.add('d-none');
    }
});