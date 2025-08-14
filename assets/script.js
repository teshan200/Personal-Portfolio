const trigger = document.querySelector('.trigger');
const menu = document.querySelector('.menu-header');
const btn = document.querySelector('.btn-header');

trigger.addEventListener('click', () => {
    menu.classList.toggle('show');
    btn.classList.toggle('show');
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        alert("Please fill all fields!");
        return;
    }

    document.getElementById("successMessage").style.display = "block";

    document.getElementById("contactForm").reset();
});