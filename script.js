document.addEventListener('DOMContentLoaded', () => {

    // ------------------------------------------
    // Active Navigation Link Highlighting on Scroll
    // ------------------------------------------
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // ------------------------------------------
    // Dynamic Greeting Based on Time of Day
    // ------------------------------------------
    const greetingElement = document.getElementById('dynamic-greeting');
    if (greetingElement) {
        const hour = new Date().getHours();
        let greetingText = "HELLO, I'M";
        if (hour < 12) greetingText = "GOOD MORNING, I'M";
        else if (hour < 18) greetingText = "GOOD AFTERNOON, I'M";
        else greetingText = "GOOD EVENING, I'M";
        greetingElement.textContent = greetingText;
    }

    // ------------------------------------------
    // Dark / Light Pastel Theme Toggle
    // ------------------------------------------
    const themeBtn = document.getElementById('theme-toggle-btn');
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            themeBtn.textContent = '☀️ Light Pastel';
        } else {
            themeBtn.textContent = '🌙 Dark Pastel';
        }
    });

    // ------------------------------------------
    // Interactive Project Category Filter
    // ------------------------------------------
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.getAttribute('data-category');
            projectCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // ------------------------------------------
    // Interactive Contact Card Click Effect
    // ------------------------------------------
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach(card => {
        card.addEventListener('click', () => {
            console.log(`User clicked contact link: ${card.getAttribute('href')}`);
        });
    });

    // ------------------------------------------
    // Scroll-To-Top Button Visibility
    // ------------------------------------------
    const backToTopBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ------------------------------------------
    // Automatic Copyright Year Updater
    // ------------------------------------------
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

});

// ------------------------------------------
// Modal Popup Open and Close Functions
// ------------------------------------------
function openModal(title, description, imageSrc = '') {
    const modal = document.getElementById('projectModal');
    const modalImg = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDescription');

    modalTitle.textContent = title;
    modalDesc.textContent = description;

    // Check if an image path is provided
    if (imageSrc && imageSrc.trim() !== '') {
        modalImg.src = imageSrc;
        modalImg.style.display = 'block'; // Display the image
    } else {
        modalImg.style.display = 'none'; // Hide if no image
        modalImg.src = '';
    }

    // Show modal popup
    modal.style.display = 'flex';
}

// Function to close modal popup
function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
}

// ------------------------------------------
// Close Modal When Clicking Outside Content
// ------------------------------------------
window.addEventListener('click', (event) => {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeModal();
    }
});