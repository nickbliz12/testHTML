const buttons = document.querySelectorAll('.nav-btn');
const pages = document.querySelectorAll('.page');
const modal = document.getElementById('modalOverlay');
const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');
const form = document.getElementById('mailForm');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();

        const target = this.getAttribute('data-target');

        pages.forEach(page => {
            page.classList.remove('active');
        });

        document.getElementById(target).classList.add('active');
    });
});


openBtn.onclick = () => modal.style.display = 'flex';

closeBtn.onclick = () => modal.style.display = 'none';

window.onclick = (e) => {
    if (e.target === modal) modal.style.display = 'none';
};

// Валидация
form.onsubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    
    form.querySelectorAll('input').forEach(input => {
        const error = input.nextElementSibling;
        if (!input.validity.valid) {
            isValid = false;
            error.textContent = input.validity.valueMissing ? "Заполните поле" : "Неверный формат";
        } else {
            error.textContent = "";
        }
    });

    if (isValid) {
        alert("Форма отправлена!");
        modal.style.display = 'none';
        form.reset();
    }
};

const scrollBtn = document.getElementById('scrollBtn');

scrollBtn.addEventListener('click', () => {
    document.querySelector('.info-block').scrollIntoView({
        behavior: 'smooth'
    });
});