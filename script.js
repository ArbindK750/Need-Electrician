class TypeWriter {
    constructor(element, texts, options = {}) {
        this.element = element;
        this.texts = texts;
        this.options = {
            typingSpeed: 100,
            deletingSpeed: 50,
            pauseTime: 1000,
            loop: true,
            ...options
        };
        this.index = 0;
        this.text = '';
        this.isDeleting = false;
        this.typing();
    }

    typing() {
        const currentText = this.texts[this.index];
        const speed = this.isDeleting ? this.options.deletingSpeed : this.options.typingSpeed;

        if (!this.isDeleting) {
            this.text = currentText.substring(0, this.text.length + 1);
        } else {
            this.text = currentText.substring(0, this.text.length - 1);
        }

        this.element.textContent = this.text;

        if (!this.isDeleting && this.text === currentText) {
            setTimeout(() => {
                this.isDeleting = true;
                this.typing();
            }, this.options.pauseTime);
        } else if (this.isDeleting && this.text === '') {
            this.isDeleting = false;
            this.index = (this.index + 1) % this.texts.length;
            setTimeout(() => this.typing(), 500);
        } else {
            setTimeout(() => this.typing(), speed);
        }
    }
}

// Usage
const textElement = document.getElementById('textAuto');
const texts = [
    "Hi, I'm here for you.",
    "We provide Electrical services."
];
new TypeWriter(textElement, texts, {
    typingSpeed: 150,
    deletingSpeed: 50,
    pauseTime: 1500
});

const keyfeatures = document.getElementById('textDot')
const dot = ['....'];

new TypeWriter(keyfeatures, dot, {
    typingSpeed: 200,
    deletingSpeed: 80,
    pauseTime: 500 
});


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const mobile = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if (!name || !mobile || !email || !subject || !message) {
        alert("Please fill out all fields.");
        return;
    }
    else if (!/^\d{10}$/.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    const whatsappMessage = `New Contact from Website:\n\nName: ${name}\nMobile: ${mobile}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    window.open(`https://wa.me/+917352563127?text=${encodedMessage}`, "_blank");

    this.reset();
    alert("Your message has been sent!");
});



const buttonText = document.getElementById('project-btn');

const originalText = buttonText.textContent;
const changedText = "Please... Click";

buttonText.addEventListener("mouseenter", () => {
    buttonText.textContent = changedText;
});
buttonText.addEventListener("mouseleave", () => {
    buttonText.textContent = originalText;
});


window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120; // adjust for header height
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

