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

// Simple email validation for the modal
function validateEmail() {
    const email = document.getElementById('emailInput').value;
    const helpDiv = document.getElementById('emailHelp');
    if (!email.includes('@') || !email.includes('.')) {
        helpDiv.textContent = 'Please enter a valid email address.';
        helpDiv.style.color = 'red';
    } else {
        helpDiv.textContent = 'Thank you for subscribing!';
        helpDiv.style.color = 'green';
        // Optionally clear the input
        document.getElementById('emailInput').value = '';
    }
}