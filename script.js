document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            // Simulate form submission
            setTimeout(function() {
                formStatus.textContent = 'Form submitted successfully!';
                formStatus.className = 'success';
                form.reset();
            }, 1000);
        }
    });

    function validateForm() {
        let isValid = true;
        formStatus.textContent = '';
        formStatus.className = '';

        // Name validation
        const name = document.getElementById('name');
        if (name.value.trim() === '') {
            isValid = false;
            name.style.borderColor = 'red';
        } else {
            name.style.borderColor = '';
        }

        // Email validation
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            isValid = false;
            email.style.borderColor = 'red';
        } else {
            email.style.borderColor = '';
        }

        // Phone validation (optional)
        const phone = document.getElementById('phone');
        const phoneRegex = /^\d{10}$/;
        if (phone.value && !phoneRegex.test(phone.value)) {
            isValid = false;
            phone.style.borderColor = 'red';
        } else {
            phone.style.borderColor = '';
        }

        // Subject validation
        const subject = document.getElementById('subject');
        if (subject.value === '') {
            isValid = false;
            subject.style.borderColor = 'red';
        } else {
            subject.style.borderColor = '';
        }

        // Message validation
        const message = document.getElementById('message');
        if (message.value.trim() === '') {
            isValid = false;
            message.style.borderColor = 'red';
        } else {
            message.style.borderColor = '';
        }

        // Agreement validation
        const agreement = document.getElementById('agreement');
        if (!agreement.checked) {
            isValid = false;
            agreement.style.outline = '1px solid red';
        } else {
            agreement.style.outline = '';
        }

        if (!isValid) {
            formStatus.textContent = 'Please fill out all required fields correctly.';
            formStatus.className = 'error';
        }

        return isValid;
    }
});
