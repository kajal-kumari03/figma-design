document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});


const registerBtn = document.querySelector('.register-btn');
registerBtn.addEventListener('click', () => {
    alert('Redirecting to the registration page!');
});



