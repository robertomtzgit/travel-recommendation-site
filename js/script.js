document.addEventListener('DOMContentLoaded', function() {
    // Highlight active navigation link
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('nav ul li a');
    menuItems.forEach(link => {
        if(link.href === currentLocation){
            link.classList.add('active');
        }
    });

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            alert(`Thank you for your message, ${name}. We'll contact you soon at: ${email}`);
            contactForm.reset();
        });
    }

    // Fade-in effect for recommendation images
    const images = document.querySelectorAll('.image-container img');
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease-in-out';
        
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    });

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

